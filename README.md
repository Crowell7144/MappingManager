# Mapping Manager

ゲームのコントローラーマッピングを管理・チートシート出力するWebアプリです。

**GitHub Pages**: https://crowell7144.github.io/MappingManager/

---

## 機能

- カテゴリ・サブカテゴリによるマッピング整理
- Xbox / PS4 / PS5 / Nintendo Switch ボタン表示切替
- コントローラー入力 / キーボード入力による割り当て
- CSV形式での保存・読込
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

## ライセンス

MIT License — see [LICENSE](LICENSE)

PromptFont by Yukari "Shinmera" Hafner — [SIL Open Font License 1.1](PromptFont_LICENSE.txt)
