# Mapping Manager

![](https://private-user-images.githubusercontent.com/189939050/551796623-58ec95fd-1990-4e5d-b7e8-d044c49cf5ab.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NzE0NTI2NjUsIm5iZiI6MTc3MTQ1MjM2NSwicGF0aCI6Ii8xODk5MzkwNTAvNTUxNzk2NjIzLTU4ZWM5NWZkLTE5OTAtNGU1ZC1iN2U4LWQwNDRjNDljZjVhYi5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjYwMjE4JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI2MDIxOFQyMjA2MDVaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0wY2I3NDdiMjMzYjA0Mzc5ZTg0NjhkM2QyNGEzNmQ2NGM2NTVhMDFlMDZiYzM3NzFiMmE1OTFjODBiMjhlZTI5JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.aBV-Z3SrzvGkRmsvt949Jkvi1P_xz0xWpSirc3ez9NE)

[日本語はこちら / Japanese](#mapping-manager-ja)

A web app for managing game controller mappings and exporting cheat sheets.

**GitHub Pages (live demo)**: https://crowell7144.github.io/MappingManager/

---

## Features

- Organize mappings with categories and sub-categories
- Button display for Xbox / PS4 / PS5 / Nintendo Switch
- Assign mappings via controller input or keyboard input modal
- Save and load data in CSV format
- Copy current data to clipboard as CSV with one click
- Share mappings via GitHub Gist URL (no account required to receive)
- Export cheat sheet as HTML (print-ready — use the browser's "Print → Save as PDF" to generate a PDF)
- Auto-save to LocalStorage
- Japanese / English UI (language-appropriate tutorial shown on first launch)

---

## Running Locally

This app uses `fetch()` to load sample CSV files, so it cannot be opened directly via the `file://` protocol.  
Please start a local web server instead.

### Python (recommended)

The repository includes `serve.py`, which disables caching for easier development:

```bash
python serve.py
```

Or use the standard `http.server` (browser-side caching may apply):

```bash
python -m http.server 8080
```

Then open http://localhost:8080 in your browser.

### Node.js

```bash
npx serve .
```

---

## Adding Sample Files

1. Add CSV files to `samples/ja/` and `samples/en/`
2. Register the entry in each folder's `samples_index.json`

```json
{
  "samples": [
    {
      "id": "my_sample",
      "name": "My Sample",
      "file": "samples/en/my_sample.csv"
    }
  ]
}
```

---

## CSV Format

```
id,parentId,type,name,mapping,exclude
1,,category,Category Name,,0
2,1,mapping,Action Name,[A],0
```

| Field | Description |
|-------|-------------|
| `id` | Unique integer ID |
| `parentId` | ID of the parent category (empty for root items) |
| `type` | `category` / `mapping` / `separator` / `pagebreak` |
| `name` | Display name |
| `mapping` | Combination of `[ButtonName]` and/or `{KeyName}` tokens |
| `exclude` | Set to `1` to exclude from cheat sheet output |

---

## Converting MSFS 2024 Controller XML to CSV

The included `msfs_xml2csv.py` script converts controller mapping XML files exported from Microsoft Flight Simulator 2024 into CSV files compatible with Mapping Manager.

### Requirements

- Python 3.8+
- No additional packages required (standard library only)

### Usage

```bash
python msfs_xml2csv.py <xml_file> [xml_file2 ...] [options]
```

**Options:**

| Option | Description |
|--------|-------------|
| `-o FILE` | Output CSV filename (default: first XML filename with `.csv` extension) |
| `--all` | Include unassigned actions in the output |

### Examples

```bash
# Convert a single file
python msfs_xml2csv.py "Gamepad 2024 Planes.xml"

# Merge multiple XML files into one CSV
python msfs_xml2csv.py "Gamepad 2024 Planes.xml" "Gamepad 2024 Transversal.xml"

# Specify output filename
python msfs_xml2csv.py "Gamepad 2024 Planes.xml" -o my_mappings.csv

# Include unassigned actions
python msfs_xml2csv.py "Gamepad 2024 Planes.xml" --all
```

The generated CSV can be loaded directly via the **📂 Open** menu in Mapping Manager.

---

## License

MIT License — see [LICENSE](LICENSE)

PromptFont by Yukari "Shinmera" Hafner — [SIL Open Font License 1.1](PromptFont_LICENSE.txt)

---

<a name="mapping-manager-ja"></a>

# Mapping Manager

[Back to English](#mapping-manager)

ゲームのコントローラーマッピングを管理・チートシート出力するWebアプリです。

**GitHub Pages**: https://crowell7144.github.io/MappingManager/

---

## 機能

- カテゴリ・サブカテゴリによるマッピング整理
- Xbox / PS4 / PS5 / Nintendo Switch ボタン表示切替
- コントローラー入力 / キーボード入力による割り当て
- CSV形式での保存・読込
- 現在のデータをワンクリックでCSVとしてクリップボードにコピー
- GitHub Gist URLでのマッピング共有（受け取る側はアカウント不要）
- チートシートHTMLエクスポート（印刷対応 / ブラウザの印刷ダイアログから「PDFに保存」を選ぶとPDF化も可能）
- 編集内容のLocalStorage自動保存
- 日本語 / English 対応（言語設定に応じたチュートリアルを初回表示）

---

## ローカルでのテスト方法

このアプリはサンプルCSVの読み込みに `fetch()` を使用しているため、`file://` プロトコルでは動作しません。  
ローカルでテストする場合は、Webサーバーを起動してください。

### Python（推奨）

リポジトリに含まれる `serve.py` を使うとキャッシュが無効化されて開発しやすくなります：

```bash
python serve.py
```

通常の `http.server` を使う場合（ブラウザ側でキャッシュが残ることがあります）：

```bash
python -m http.server 8080
```

起動後、ブラウザで http://localhost:8080 を開いてください。

### Node.js

```bash
npx serve .
```

---

## サンプルの追加方法

1. `samples/ja/` および `samples/en/` にCSVファイルを追加
2. 各フォルダの `samples_index.json` にエントリを追加

```json
{
  "samples": [
    {
      "id": "my_sample",
      "name": "マイサンプル",
      "file": "samples/ja/my_sample.csv"
    }
  ]
}
```

---

## CSV形式

```
id,parentId,type,name,mapping,exclude
1,,category,カテゴリ名,,0
2,1,mapping,アクション名,[A],0
```

| フィールド | 説明 |
|-----------|------|
| `id` | 一意の整数ID |
| `parentId` | 親カテゴリのID（ルートは空） |
| `type` | `category` / `mapping` / `separator` / `pagebreak` |
| `name` | 表示名 |
| `mapping` | `[ボタン名]` または `{キー名}` の組み合わせ |
| `exclude` | `1` で出力から除外 |

---

## MSFS 2024 コントローラーXMLをCSVに変換する

同梱の `msfs_xml2csv.py` スクリプトを使うと、Microsoft Flight Simulator 2024 からエクスポートしたコントローラーマッピングのXMLファイルを、Mapping Manager で読み込めるCSV形式に変換できます。

### 必要な環境

- Python 3.8 以上
- 追加パッケージ不要（標準ライブラリのみ）

### 使い方

```bash
python msfs_xml2csv.py <XMLファイル> [XMLファイル2 ...] [オプション]
```

**オプション:**

| オプション | 説明 |
|-----------|------|
| `-o FILE` | 出力CSVファイル名（省略時: 最初のXMLファイル名 + `.csv`）|
| `--all` | 未割り当てのアクションも出力に含める |

### 実行例

```bash
# 単一ファイルを変換
python msfs_xml2csv.py "Gamepad 2024 Planes.xml"

# 複数のXMLを1つのCSVにまとめる
python msfs_xml2csv.py "Gamepad 2024 Planes.xml" "Gamepad 2024 Transversal.xml"

# 出力ファイル名を指定する
python msfs_xml2csv.py "Gamepad 2024 Planes.xml" -o my_mappings.csv

# 未割り当てのアクションも含める
python msfs_xml2csv.py "Gamepad 2024 Planes.xml" --all
```

生成されたCSVは、Mapping Manager の **📂 開く** メニューから直接読み込めます。

---

## ライセンス

MIT License — see [LICENSE](LICENSE)

PromptFont by Yukari "Shinmera" Hafner — [SIL Open Font License 1.1](PromptFont_LICENSE.txt)
