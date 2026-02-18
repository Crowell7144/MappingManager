"""
MSFS2024 Controller Mapping XML to CSV Converter
MappingManager (https://crowell7144.github.io/MappingManager/) 用CSVに変換するスクリプト

使用方法:
  python msfs_xml2csv.py <xml1> [xml2 ...] [オプション]

例:
  python msfs_xml2csv.py Gamepad_2024_Planes.xml Gamepad_2024_Transversal.xml
  python msfs_xml2csv.py Gamepad_2024_Planes.xml -o output.csv
  python msfs_xml2csv.py Gamepad_2024_Planes.xml Gamepad_2024_Transversal.xml --all
"""

import argparse
import re
import sys
import xml.etree.ElementTree as ET
from pathlib import Path

# ----------------------------------------------------------------
# ボタン名マッピング (XML の Information 属性 -> MappingManager 表記)
# ----------------------------------------------------------------
BTN_MAP = {
    'A': 'A', 'B': 'B', 'X': 'X', 'Y': 'Y',
    'LB': 'LB', 'RB': 'RB',
    'LT': 'LT', 'RT': 'RT',
    'Back': 'Back', 'Start': 'Start',
    'View Button': 'Back',   # Xbox の View ボタン = Back に対応
    'Menu Button': 'Start',  # Xbox の Menu ボタン = Start に対応
    'LS': 'LS', 'RS': 'RS',
    'LS X': 'LS:X', 'LS Y': 'LS:Y',
    'LS Up': 'LS:Y', 'LS Down': 'LS:Y',
    'LS Left': 'LS:X', 'LS Right': 'LS:X',
    'RS X': 'RS:X', 'RS Y': 'RS:Y',
    'RS Up': 'RS:Y', 'RS Down': 'RS:Y',
    'RS Left': 'RS:X', 'RS Right': 'RS:X',
    'D-PAD Up': '▲', 'D-PAD Down': '▼',
    'D-PAD Left': '◀', 'D-PAD Right': '▶',
}


def keys_to_mapping(keys: list[str]) -> str:
    """KEYリストを [ボタン]+[ボタン] 形式に変換する"""
    return ''.join('[' + BTN_MAP.get(k, k) + ']' for k in keys)

def format_action_name(raw_name: str) -> str:
    """
    KEY_ACTION_NAME 形式を Action Name 形式に変換する
    1. 先頭の 'KEY_' を削除
    2. アンダースコア '_' をスペース ' ' に置換
    3. 各単語の先頭のみ大文字にする
    """
    if raw_name.startswith('KEY_'):
        # 'KEY_' を除去
        name = raw_name[4:]
    else:
        name = raw_name

    # アンダースコアをスペースに置き換え、title() で整形
    return name.replace('_', ' ').strip().title()

def parse_xml(filepath: str, include_unassigned: bool) -> dict:
    """
    XMLファイルを解析してコンテキスト別のアクションを返す。

    Returns:
        {
            'profile_name': str,
            'contexts': {
                'CONTEXT_NAME': [
                    {'name': str, 'mapping': str, 'delay': bool, 'assigned': bool},
                    ...
                ]
            }
        }
    """
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # 複数ルート要素を持つためXMLヘッダーを除去してラップ
    content = re.sub(r'<\?xml[^?]*\?>', '', content)
    try:
        root = ET.fromstring('<root>' + content + '</root>')
    except ET.ParseError as e:
        print(f"[ERROR] {filepath} のパースに失敗しました: {e}", file=sys.stderr)
        sys.exit(1)

    # プロファイル名を取得
    friendly = root.find('FriendlyName')
    profile_name = friendly.text if friendly is not None else Path(filepath).stem

    contexts = {}
    for ctx in root.iter('Context'):
        ctx_name = ctx.get('ContextName', 'UNKNOWN')
        actions = []
        for action in ctx.findall('Action'):
            action_name = action.get('ActionName', '')
            delay = float(action.get('Delay', 0)) > 0
            primary = action.find('Primary')

            if primary is not None:
                keys = [k.get('Information', '') for k in primary.findall('KEY')]
                keys = [k for k in keys if k]  # 空文字除去
            else:
                keys = []

            assigned = bool(keys)

            if not assigned and not include_unassigned:
                continue

            mapping = keys_to_mapping(keys) if assigned else ''
            actions.append({
                'name': action_name,
                'mapping': mapping,
                'delay': delay,
                'assigned': assigned,
            })

        if actions:
            contexts[ctx_name] = actions

    return {'profile_name': profile_name, 'contexts': contexts}


def build_csv(profiles: list[dict]) -> str:
    """パース済みプロファイルのリストからCSV文字列を生成する"""
    rows = ['id,parentId,type,name,mapping,exclude']
    id_counter = [1]

    def next_id() -> int:
        cid = id_counter[0]
        id_counter[0] += 1
        return cid

    def add_row(row_type: str, name: str, mapping: str, parent_id=None) -> int:
        cid = next_id()
        pid = str(parent_id) if parent_id is not None else ''
        # name にカンマが含まれる場合はクォート
        safe_name = f'"{name}"' if ',' in name else name
        rows.append(f'{cid},{pid},{row_type},{safe_name},{mapping},0')
        return cid

    for profile in profiles:
        for ctx_name, actions in profile['contexts'].items():
            display_ctx_name = f"{ctx_name}"
            
            # parent_id を指定しないことで、これがトップカテゴリになります
            ctx_cat_id = add_row('category', display_ctx_name, '')

            for a in actions:
                display_name = format_action_name(a['name'])
                mapping = a['mapping']
                if a['delay'] and mapping:
                    mapping = 'Hold ' + mapping

                add_row('mapping', display_name, mapping, parent_id=ctx_cat_id)

    return '\n'.join(rows)


def main():
    parser = argparse.ArgumentParser(
        description='MSFS2024 コントローラー設定XML を MappingManager用CSV に変換します',
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog=__doc__,
    )
    parser.add_argument(
        'xml_files',
        metavar='XML',
        nargs='+',
        help='変換するXMLファイル (複数指定可)',
    )
    parser.add_argument(
        '-o', '--output',
        metavar='FILE',
        default='',
        help='出力CSVファイル名 (省略時: 最初のXMLファイル名.csv)',
    )
    parser.add_argument(
        '--all',
        action='store_true',
        help='未割り当て (Unassigned) のアクションも出力する',
    )

    args = parser.parse_args()

    # 出力ファイル名の決定
    if args.output:
        output_path = args.output
    else:
        output_path = Path(args.xml_files[0]).stem + '.csv'

    # XMLファイルを順番に解析
    profiles = []
    for xml_file in args.xml_files:
        p = Path(xml_file)
        if not p.exists():
            print(f"[ERROR] ファイルが見つかりません: {xml_file}", file=sys.stderr)
            sys.exit(1)
        print(f"読み込み中: {xml_file}", file=sys.stderr)
        profile = parse_xml(xml_file, include_unassigned=args.all)
        profiles.append(profile)
        assigned_count = sum(
            1 for ctx in profile['contexts'].values()
            for a in ctx if a['assigned']
        )
        total_count = sum(len(ctx) for ctx in profile['contexts'].values())
        print(
            f"  プロファイル: {profile['profile_name']} "
            f"/ コンテキスト数: {len(profile['contexts'])} "
            f"/ アクション数: {total_count} (割り当てあり: {assigned_count})",
            file=sys.stderr,
        )

    # CSV生成・書き出し
    csv_content = build_csv(profiles)
    with open(output_path, 'w', encoding='utf-8', newline='\n') as f:
        f.write(csv_content)

    total_rows = csv_content.count('\n')
    print(f"\n出力完了: {output_path} ({total_rows} 行)", file=sys.stderr)


if __name__ == '__main__':
    main()
