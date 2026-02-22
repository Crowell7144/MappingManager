# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Running Locally

This app uses `fetch()` to load sample CSV files and cannot be opened via `file://`. Use a local web server:

```bash
# Recommended — disables browser caching for development:
python serve.py

# Optional port argument:
python serve.py 3000

# Standard Python server (caching may interfere):
python -m http.server 8080

# Node.js:
npx serve .
```

Then open http://localhost:8080. There is no build step, no package manager, and no test suite.

## Architecture

This is a **vanilla JS, no-build, single-page app**. The entire application is split across two files:

- **`index.html`** — All HTML structure including every modal. UI strings use `data-i18n` / `data-i18n-html` / `data-i18n-title` / `data-i18n-placeholder` attributes; JavaScript fills them at runtime via `translatePage()`.
- **`app.js`** — All application logic (~1700+ lines). Sections are delimited by `// ═══` banners:
  - **I18N** — `I18N` object with `ja` and `en` sub-objects. `t(key)` resolves the current language.
  - **DATA MODEL** — Global mutable state: `items[]`, `nextId`, `fileName`, `undoStack`, `collapsedIds`, `clipboard`, `currentController`, `currentLang`.
  - **UTILITY** — CSV parsing/serialization (`csvToItems`, `itemsToCSV`), mapping token parser (`parseMappingTokens`), badge HTML renderers (`mappingDisplayHTML`, `buttonBadgeHTML`, `keyBadgeHTML`).
  - **RENDER** — `render()` rebuilds `#item-list` from `items[]` as a hierarchical tree (categories contain child items). Supports drag-and-drop reordering.
  - **UNDO** — `pushUndo()` / `undo()` snapshot the full `items[]` array onto a stack.
  - **GAMEPAD** — Gamepad API polling via `requestAnimationFrame`. Captures button combos for the gamepad input modal.
  - **KEYBOARD MODAL** — Virtual keyboard UI for composing `{KeyName}` tokens.
  - **EXPORT** — `buildExportHTML()` produces a self-contained cheat sheet HTML. Two render modes: `promptfont` (PromptFont glyph font) and `badge` (CSS text badges). Three themes: `mono`, `navy`, `recommended`.
  - **GIST** — Fetches CSV from `api.github.com/gists/{id}`, constructs a shareable `?gist=…&export=1` URL.
  - **META BLOCK** — Hidden system rows (names starting with `__MM_`) embedded in the CSV to store per-file recommended export settings (columns, font size, controller, theme).
  - **SAMPLE LOADER** — Fetches `samples/samples_index.json` and populates the Open menu dropdown.
- **`style.css`** — All styles. Theming via CSS custom properties under `[data-theme="dark"]` / `[data-theme="light"]`.
- **`promptfont.css`** / **`promptfont.ttf`** — PromptFont icon font for controller button glyphs in exported cheat sheets.

## Data Model

Items are plain objects in the global `items[]` array, linked by `parentId`:

```
{ id, parentId, type, name, mapping, exclude }
```

- `type`: `"category"` | `"mapping"` | `"separator"` | `"pagebreak"`
- `mapping`: string of `[ButtonName]` and/or `{KeyName}` tokens, e.g. `[LT][A]+{Shift}`
- Button labels are stored using the **currently selected controller's labels** (not canonical names). `convertMappingString()` translates between controllers when the controller select changes.

### Mapping Token Format

- `[ButtonName]` — controller button (e.g. `[A]`, `[LB]`, `[LS:X]`)
- `{KeyName}` — keyboard key (e.g. `{Ctrl}`, `{Space}`)
- Plain text between tokens is preserved as-is

## Sample Files

All CSV files live in `samples/`. A single `samples/samples_index.json` lists them. Both `name` and `file` accept either a plain string (language-agnostic) or a `{"ja": ..., "en": ...}` object:

```json
{
  "samples": [
    {
      "id": "my_sample",
      "name": { "ja": "マイサンプル", "en": "My Sample" },
      "file": "samples/my_sample.csv"
    }
  ]
}
```

## LocalStorage Keys

| Key | Value |
|-----|-------|
| `mappingManagerData` | Auto-saved CSV content |
| `mappingManagerFileName` | Current filename |
| `mappingManagerLang` | `"ja"` or `"en"` |
| `mappingManagerController` | `"xbox"` / `"ps4"` / `"ps5"` / `"switch"` |
| `mm_theme` | `"dark"` or `"light"` |
| `mappingManagerTutorialShown` | `"1"` (suppresses tutorial on next launch) |

## URL Parameters

| Parameter | Effect |
|-----------|--------|
| `?gist=<id>` | Auto-loads the specified Gist on startup |
| `?export=1` | Opens in full-screen cheat sheet view (hides editor UI) |
