"""
tsv2csv.py - 旧形式TSVから新形式CSVへの変換スクリプト

旧形式（TSV）:
  Category	SubCategory	Name	Mapping
  Flight Control	 	Ailerons Axis	LS:X
  Power Management	Throttle	Decrease Throttle	LB

新形式（CSV）:
  id,parentId,type,name,mapping
  1,,category,Flight Control,
  2,1,mapping,Ailerons Axis,[LS:X]
  3,,category,Power Management,
  4,3,category,Throttle,
  5,4,mapping,Decrease Throttle,[LB]

使い方:
  python tsv2csv.py paste.tsv
  python tsv2csv.py paste.tsv -o output.csv
"""

import argparse
import csv
import sys


def convert_mapping(mapping_str):
    """旧形式のマッピング文字列を新形式に変換する。
    
    旧: "B, ▲"  or  "LB, RB"
    新: "[B][▲]"  or  "[LB][RB]"
    """
    if not mapping_str or not mapping_str.strip():
        return ""
    buttons = [b.strip() for b in mapping_str.split(",") if b.strip()]
    return "".join(f"[{b}]" for b in buttons)


def tsv_to_csv(tsv_path):
    """TSVファイルを読み込み、新形式のアイテムリストを返す。"""
    items = []
    next_id = 1
    category_map = {}    # category_name -> id
    subcategory_map = {} # "category|||subcategory" -> id

    with open(tsv_path, "r", encoding="utf-8") as f:
        lines = f.readlines()

    if len(lines) < 2:
        print("エラー: TSVファイルにデータがありません。", file=sys.stderr)
        sys.exit(1)

    # ヘッダー行をスキップ
    for line in lines[1:]:
        line = line.rstrip("\n").rstrip("\r")
        if not line.strip():
            continue

        fields = line.split("\t")
        # 足りないフィールドを補完
        while len(fields) < 4:
            fields.append("")

        cat, sub_cat, name, mapping = fields[0], fields[1], fields[2], fields[3]

        if not cat:
            continue

        # カテゴリ作成
        if cat not in category_map:
            cat_id = next_id
            next_id += 1
            items.append({
                "id": cat_id,
                "parentId": "",
                "type": "category",
                "name": cat,
                "mapping": "",
                "exclude": 0,
            })
            category_map[cat] = cat_id

        parent_id = category_map[cat]

        # サブカテゴリ作成
        if sub_cat and sub_cat.strip():
            sub_key = f"{cat}|||{sub_cat}"
            if sub_key not in subcategory_map:
                sub_id = next_id
                next_id += 1
                items.append({
                    "id": sub_id,
                    "parentId": category_map[cat],
                    "type": "category",
                    "name": sub_cat,
                    "mapping": "",
                    "exclude": 0,
                })
                subcategory_map[sub_key] = sub_id
            parent_id = subcategory_map[sub_key]

        # マッピングアイテム作成
        item_id = next_id
        next_id += 1
        items.append({
            "id": item_id,
            "parentId": parent_id,
            "type": "mapping",
            "name": name,
            "mapping": convert_mapping(mapping),
            "exclude": 0,
        })

    return items


def write_csv(items, output_path):
    """アイテムリストをCSVファイルに書き出す。"""
    with open(output_path, "w", encoding="utf-8", newline="") as f:
        writer = csv.writer(f)
        writer.writerow(["id", "parentId", "type", "name", "mapping", "exclude"])
        for item in items:
            writer.writerow([
                item["id"],
                item["parentId"],
                item["type"],
                item["name"],
                item["mapping"],
                item.get("exclude", 0),
            ])


def main():
    parser = argparse.ArgumentParser(
        description="旧形式TSVを新形式CSVに変換します"
    )
    parser.add_argument("input", help="入力TSVファイルのパス")
    parser.add_argument(
        "-o", "--output",
        help="出力CSVファイルのパス（省略時: 入力ファイル名の拡張子を.csvに変更）",
    )
    args = parser.parse_args()

    output_path = args.output
    if not output_path:
        if args.input.lower().endswith(".tsv"):
            output_path = args.input[:-4] + ".csv"
        elif args.input.lower().endswith(".txt"):
            output_path = args.input[:-4] + ".csv"
        else:
            output_path = args.input + ".csv"

    items = tsv_to_csv(args.input)
    write_csv(items, output_path)

    cat_count = sum(1 for it in items if it["type"] == "category")
    map_count = sum(1 for it in items if it["type"] == "mapping")
    print(f"変換完了: {args.input} → {output_path}")
    print(f"  カテゴリ: {cat_count}件, マッピング: {map_count}件, 合計: {len(items)}件")


if __name__ == "__main__":
    main()
