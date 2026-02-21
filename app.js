// ═══════════════════════════════════════════════════════════════════════════
// I18N (INTERNATIONALIZATION)
// ═══════════════════════════════════════════════════════════════════════════

const I18N = {
  ja: {
    // Header / Toolbar
    "filename.tooltip": "クリックしてファイル名を変更",
    "btn.new": "📄 新規",
    "btn.openCsv": "📂 CSV読込",
    "btn.saveCsv": "💾 CSV保存",
    "btn.export": "📄 チートシート出力",
    "btn.undo": "↩ 元に戻す",
    // Column Headers
    "col.type": "種別",
    "col.name": "名前",
    "col.mapping": "マッピング",
    "col.parent": "親",
    "col.output": "☑",
    // Add Buttons
    "add.mapping": "+ マッピング",
    "add.category": "+ カテゴリ",
    "add.separator": "+ セパレーター",
    "add.pagebreak": "+ 改ページ",
    // Type Labels
    "type.category": "カテゴリ",
    "type.mapping": "マッピング",
    "type.separator": "セパレーター",
    "type.pagebreak": "改ページ",
    // Gamepad Modal
    "gp.title": "🎮 コントローラ入力待機中",
    "gp.currentMapping": "現在のマッピング:",
    "gp.none": "なし",
    "gp.instruction": "コントローラーのボタンを押してください。同時押しに対応しています。",
    "gp.stickButtons": "スティック方向指定:",
    "gp.clear":  "クリア",
    "gp.group.face":     "フェイス",
    "gp.group.shoulder": "ショルダー",
    "gp.group.system":   "システム",
    "gp.group.dpad":     "十字キー",
    "gp.paddleHint": '💡 LP1/LP2/RP1/RP2（パドル）等はGamepad APIで取得できないため、マッピング欄に<code>[LP1]</code>等と直接入力してください。',
    "gp.newInput": "新しい入力:",
    "gp.noInput": "入力なし",
    "gp.cancel": "キャンセル",
    "gp.skip": "次へ",
    "gp.apply": "適用",
    "gp.applyNext": "適用して次へ",
    "gp.nameEmpty": "（名前未設定）",
    // Export Modal
    "exp.title": "📄 チートシート出力",
    "exp.columns": "カラム数:",
    "exp.fontSize": "フォントサイズ:",
    "exp.buttonStyle": "ボタン表示:",
    "exp.promptfont": "PromptFont（グリフ）",
    "exp.badge": "テキストバッジ（CSS）",
    "exp.fontSource": "フォント参照先:",
    "exp.fontLocal": "ローカル（同フォルダ）",
    "exp.fontGhpages": "GitHub Pages（URL参照）",
    "exp.theme": "スタイル:",
    "exp.themeMono": "モノクロ",
    "exp.themeColor": "ネイビー",
    "exp.close": "閉じる",
    "exp.newTab": "🔗 別タブで開く",
    "exp.print": "🖨 印刷",
    "exp.saveHtml": "💾 HTMLを保存",
    "exp.hintFile": "出力ファイル:",
    "exp.hintLocal": "（promptfont.css, promptfont.ttf と同じフォルダに配置してください）",
    "exp.hintGhpages": "（フォントをGitHub Pagesから読み込み — 単体で動作します）",
    "exp.hintBadge": "（外部ファイル不要 — 単体で動作します）",
    "exp.warnDeepNest": "⚠️ カテゴリが3階層以上ネストされています。チートシートでは正しく表示されない場合があります。",
    // Status Bar
    "status.noController": "コントローラー未接続",
    "status.shortcuts": "Ctrl+S: 保存 | Ctrl+Z: 元に戻す | 右クリック: メニュー",
    // Context Menu
    "ctx.insertAbove": "⬆ 上に挿入",
    "ctx.insertBelow": "⬇ 下に挿入",
    "ctx.moveUp": "⬆ 上へ移動",
    "ctx.moveDown": "⬇ 下へ移動",
    "ctx.copy": "📋 コピー",
    "ctx.cut": "✂️ 切り取り",
    "ctx.pasteAbove": "📋 上に貼り付け",
    "ctx.pasteBelow": "📋 下に貼り付け",
    "ctx.delete": "🗑 削除",
    // Render / Misc
    "list.empty": 'アイテムがありません。下の「+」ボタンか、CSVファイルを読み込んでください。',
    "drag.tooltip": "ドラッグして移動",
    "deco.pagebreak": "改ページ",
    "placeholder.category": "カテゴリ名...",
    "placeholder.mapping": "機能名...",
    "mapping.clickToEdit": "クリックして入力...",
    "gamepad.tooltip": "コントローラーで入力",
    "keyboard.tooltip": "キーボードで入力",
    "kb.title": "⌨️ キーボード入力",
    "kb.tabKeys": "キー",
    "kb.tabSymbols": "記号",
    "kb.lshift": "L-Shift", "kb.rshift": "R-Shift",
    "kb.lctrl": "L-Ctrl",  "kb.rctrl": "R-Ctrl",
    "kb.lalt": "L-Alt",    "kb.ralt": "R-Alt",
    "kb.currentMapping": "現在のマッピング:",
    "kb.none": "なし",
    "kb.instruction": "修飾キーをONにしてからキーをクリックしてください。修飾キーは追加後に自動でOFFになります。",
    "kb.newInput": "新しい入力:",
    "kb.noInput": "入力なし",
    "kb.cancel": "キャンセル",
    "kb.clear": "クリア",
    "kb.skip": "次へ",
    "kb.apply": "適用",
    "kb.applyNext": "適用して次へ",
    "kb.nameEmpty": "（名前未設定）",
    "kb.modifiers": "修飾:",
    "parent.root": "（ルート）",
    "delete.tooltip": "削除",
    "output.on": "出力に含める（クリックで除外）",
    "output.off": "出力から除外中（クリックで復帰）",
    "output.inheritedOff": "親が除外されているため出力されません",
    "confirm.new": "現在のデータを破棄して新規作成しますか？",
    "confirm.loadSample": "現在のデータを破棄してサンプルを読み込みますか？",
    "sample.placeholder": "📂 サンプルを開く",
    // Language
    "lang.label": "🌐",
    // Settings Modal
    "settings.title": "⚙ 設定",
    "settings.theme": "テーマ",
    "settings.theme.dark": "🌙 ダーク",
    "settings.theme.light": "☀️ ライト",
    "settings.lang": "言語 / Language",
    "settings.close": "閉じる",
    // Export (meta)
    "exp.themeNavy": "ネイビー",
    "exp.themeRecommended": "推奨設定",
    // Meta block
    "meta.saveRecommended": "推奨設定を保存する",
    "meta.useRecommended": "推奨値を使用",
    "meta.recommendedPrefix": "📌 推奨値",
    "meta.userSample": "自由にコメントを書くことが出来ます",
  },
  en: {
    "filename.tooltip": "Click to rename",
    "btn.new": "📄 New",
    "btn.openCsv": "📂 Open CSV",
    "btn.saveCsv": "💾 Save CSV",
    "btn.export": "📄 Export Cheatsheet",
    "btn.undo": "↩ Undo",
    "col.type": "Type",
    "col.name": "Name",
    "col.mapping": "Mapping",
    "col.parent": "Parent",
    "col.output": "☑",
    "add.mapping": "+ Mapping",
    "add.category": "+ Category",
    "add.separator": "+ Separator",
    "add.pagebreak": "+ Page Break",
    "type.category": "Category",
    "type.mapping": "Mapping",
    "type.separator": "Separator",
    "type.pagebreak": "Page Break",
    "gp.title": "🎮 Waiting for Controller Input",
    "gp.currentMapping": "Current mapping:",
    "gp.none": "None",
    "gp.instruction": "Press buttons on your controller. Simultaneous presses are supported.",
    "gp.stickButtons": "Stick direction:",
    "gp.clear":  "Clear",
    "gp.group.face":     "Face",
    "gp.group.shoulder": "Shoulder",
    "gp.group.system":   "System",
    "gp.group.dpad":     "D-Pad",
    "gp.paddleHint": '💡 LP1/LP2/RP1/RP2 (paddles) cannot be captured via Gamepad API. Type <code>[LP1]</code> etc. directly in the mapping field.',
    "gp.newInput": "New input:",
    "gp.noInput": "No input",
    "gp.cancel": "Cancel",
    "gp.skip": "Skip",
    "gp.apply": "Apply",
    "gp.applyNext": "Apply & Next",
    "gp.nameEmpty": "(unnamed)",
    "exp.title": "📄 Export Cheatsheet",
    "exp.columns": "Columns:",
    "exp.fontSize": "Font size:",
    "exp.buttonStyle": "Button style:",
    "exp.promptfont": "PromptFont (Glyph)",
    "exp.badge": "Text Badge (CSS)",
    "exp.fontSource": "Font source:",
    "exp.fontLocal": "Local (same folder)",
    "exp.fontGhpages": "GitHub Pages (URL)",
    "exp.theme": "Style:",
    "exp.themeMono": "Monochrome",
    "exp.themeColor": "Navy",
    "exp.close": "Close",
    "exp.newTab": "🔗 Open in New Tab",
    "exp.print": "🖨 Print",
    "exp.saveHtml": "💾 Save HTML",
    "exp.hintFile": "Output file:",
    "exp.hintLocal": "(place alongside promptfont.css and promptfont.ttf)",
    "exp.hintGhpages": "(loads font from GitHub Pages — works standalone)",
    "exp.hintBadge": "(no external files needed — works standalone)",
    "exp.warnDeepNest": "⚠️ Categories are nested 3 or more levels deep. They may not display correctly in the cheat sheet.",
    "status.noController": "No controller connected",
    "status.shortcuts": "Ctrl+S: Save | Ctrl+Z: Undo | Right-click: Menu",
    "ctx.insertAbove": "⬆ Insert Above",
    "ctx.insertBelow": "⬇ Insert Below",
    "ctx.moveUp": "⬆ Move Up",
    "ctx.moveDown": "⬇ Move Down",
    "ctx.copy": "📋 Copy",
    "ctx.cut": "✂️ Cut",
    "ctx.pasteAbove": "📋 Paste Above",
    "ctx.pasteBelow": "📋 Paste Below",
    "ctx.delete": "🗑 Delete",
    "list.empty": "No items. Use the \"+\" buttons below or open a CSV file.",
    "drag.tooltip": "Drag to reorder",
    "deco.pagebreak": "Page Break",
    "placeholder.category": "Category name...",
    "placeholder.mapping": "Function name...",
    "mapping.clickToEdit": "Click to edit...",
    "gamepad.tooltip": "Input from controller",
    "keyboard.tooltip": "Input from keyboard",
    "kb.title": "⌨️ Keyboard Input",
    "kb.tabKeys": "Keys",
    "kb.tabSymbols": "Symbols",
    "kb.lshift": "L-Shift", "kb.rshift": "R-Shift",
    "kb.lctrl": "L-Ctrl",  "kb.rctrl": "R-Ctrl",
    "kb.lalt": "L-Alt",    "kb.ralt": "R-Alt",
    "kb.currentMapping": "Current mapping:",
    "kb.none": "None",
    "kb.instruction": "Toggle modifier keys ON, then click a key. Modifiers auto-reset after each key.",
    "kb.newInput": "New input:",
    "kb.noInput": "No input",
    "kb.cancel": "Cancel",
    "kb.clear": "Clear",
    "kb.skip": "Skip",
    "kb.apply": "Apply",
    "kb.applyNext": "Apply & Next",
    "kb.nameEmpty": "(unnamed)",
    "kb.modifiers": "Mod:",
    "parent.root": "(root)",
    "delete.tooltip": "Delete",
    "output.on": "Included in output (click to exclude)",
    "output.off": "Excluded from output (click to include)",
    "output.inheritedOff": "Excluded because parent is excluded",
    "confirm.new": "Discard current data and create new?",
    "confirm.loadSample": "Discard current data and load sample?",
    "sample.placeholder": "📂 Open Sample",
    "lang.label": "🌐",
    // Settings Modal
    "settings.title": "⚙ Settings",
    "settings.theme": "Theme",
    "settings.theme.dark": "🌙 Dark",
    "settings.theme.light": "☀️ Light",
    "settings.lang": "Language",
    "settings.close": "Close",
    // Export (meta)
    "exp.themeNavy": "Navy",
    "exp.themeRecommended": "Recommended",
    // Meta block
    "meta.saveRecommended": "Save Recommended Settings",
    "meta.useRecommended": "Use Recommended Settings",
    "meta.recommendedPrefix": "📌 Recommended",
    "meta.userSample": "You can write free-form comments here",
  }
};

let currentLang = "ja";

function t(key) { return (I18N[currentLang] && I18N[currentLang][key]) || I18N.ja[key] || key; }

function detectLang() {
  const params = new URLSearchParams(window.location.search);
  if (params.get("lang") && I18N[params.get("lang")]) return params.get("lang");
  const stored = localStorage.getItem("mappingManagerLang");
  if (stored && I18N[stored]) return stored;
  const nav = (navigator.language || "").substring(0, 2);
  return I18N[nav] ? nav : "ja";
}

function setLang(lang) {
  currentLang = lang;
  localStorage.setItem("mappingManagerLang", lang);
  const url = new URL(window.location);
  url.searchParams.set("lang", lang);
  history.replaceState(null, "", url);
  document.documentElement.lang = lang;
  translatePage();
  loadSamplesIndex(); // reload index for the new language
  updateLangSegment();
  render();
}

function translatePage() {
  // Static elements with data-i18n
  document.querySelectorAll("[data-i18n]").forEach(el => {
    el.textContent = t(el.dataset.i18n);
  });
  document.querySelectorAll("[data-i18n-html]").forEach(el => {
    el.innerHTML = t(el.dataset.i18nHtml);
  });
  document.querySelectorAll("[data-i18n-title]").forEach(el => {
    el.title = t(el.dataset.i18nTitle);
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    el.placeholder = t(el.dataset.i18nPlaceholder);
  });
  // Update gamepad status immediately
  updateGamepadStatusText();
}

function updateGamepadStatusText() {
  const gps = navigator.getGamepads ? navigator.getGamepads() : [];
  const gp = gps[0]||gps[1]||gps[2]||gps[3];
  document.getElementById("gpDot").style.background = gp ? "var(--status-connected)" : "var(--text-disabled)";
  document.getElementById("gpStatus").textContent = gp ? "🎮 " + (gp.id||"").substring(0,50) : t("status.noController");
  document.getElementById("gpStatus").style.color = gp ? "var(--status-connected)" : "var(--text-dim)";
}

// ═══════════════════════════════════════════════════════════════════════════
// DATA MODEL
// ═══════════════════════════════════════════════════════════════════════════

let nextId = 1;
let items = [];
let fileName = "new_mapping.csv";
let selectedId = null;
let clipboard = null;
let clipboardCut = false;
let clipboardCutRootId = null;
let undoStack = [];
let collapsedIds = new Set();
let gamepadTargetId = null;
let gamepadPressedButtons = [];
let gamepadIsIdle = true;
let gamepadPrevPressed = new Set();
let gamepadRAF = null;
// 軸の符号履歴: ls0/ls1=LS X/Y軸, rs0/rs1=RS X/Y軸
// pos=正方向を検出済み, neg=負方向を検出済み

// ── Controller definitions ──
const CONTROLLER_NAMES = { xbox:'Xbox', ps4:'PS4 DualShock4', ps5:'PS5 DualSense', switch:'Nintendo Switch' };
// Canonical key = Xbox button name. Each map: canonical -> display label for that controller.
const CONTROLLER_BUTTON_MAP = {
  xbox:   { A:'A',  B:'B',  X:'X',  Y:'Y',  LB:'LB', RB:'RB', LT:'LT', RT:'RT', Back:'Back',   Start:'Start'   },
  ps4:    { A:'×',  B:'○',  X:'□',  Y:'△',  LB:'L1', RB:'R1', LT:'L2', RT:'R2', Back:'Share',  Start:'Options' },
  ps5:    { A:'×',  B:'○',  X:'□',  Y:'△',  LB:'L1', RB:'R1', LT:'L2', RT:'R2', Back:'Create', Start:'Options' },
  switch: { A:'B',  B:'A',  X:'Y',  Y:'X',  LB:'L',  RB:'R',  LT:'ZL', RT:'ZR', Back:'−',      Start:'+'       },
};
// Buttons shared across all controllers (not converted)
const COMMON_BUTTONS = new Set(['LS','RS','LS:X','LS:Y','LS:XY','RS:X','RS:Y','RS:XY','▲','▼','◀','▶','▲▶','▼▶','◀▼','◀▲','LP1','LP2','RP1','RP2','Controller']);

let currentController = 'xbox';

function getControllerReverseMap(ctrlId) {
  const map = CONTROLLER_BUTTON_MAP[ctrlId];
  const rev = {};
  for (const [canonical, label] of Object.entries(map)) rev[label] = canonical;
  return rev;
}

function convertMappingString(mapping, fromCtrl, toCtrl) {
  if (fromCtrl === toCtrl || !mapping) return mapping;
  const reverseFrom = getControllerReverseMap(fromCtrl);
  const toMap = CONTROLLER_BUTTON_MAP[toCtrl];
  const tokens = parseMappingTokens(mapping);
  return tokens.map(tok => {
    if (tok.type === 'key') return `{${tok.value}}`;
    if (tok.type !== 'button') return tok.value;
    if (COMMON_BUTTONS.has(tok.value)) return `[${tok.value}]`;
    const canonical = reverseFrom[tok.value] ?? tok.value;
    const converted = toMap[canonical] ?? tok.value;
    return `[${converted}]`;
  }).join('');
}

function switchController(newCtrl) {
  if (newCtrl === '__recommended__') {
    const meta = readMetaSettings();
    if (!meta || !meta.controller || !CONTROLLER_BUTTON_MAP[meta.controller]) return;
    const actualCtrl = meta.controller;
    if (actualCtrl !== currentController) {
      pushUndo();
      items = items.map(it => ({
        ...it,
        mapping: convertMappingString(it.mapping, currentController, actualCtrl)
      }));
      currentController = actualCtrl;
      localStorage.setItem('mappingManagerController', actualCtrl);
      const url = new URL(window.location);
      url.searchParams.set('ctrl', actualCtrl);
      history.replaceState(null, '', url);
      render();
    }
    document.getElementById('controllerSelect').value = '__recommended__';
    return;
  }
  if (newCtrl === currentController) {
    document.getElementById('controllerSelect').value = newCtrl;
    return;
  }
  pushUndo();
  items = items.map(it => ({
    ...it,
    mapping: convertMappingString(it.mapping, currentController, newCtrl)
  }));
  currentController = newCtrl;
  localStorage.setItem('mappingManagerController', newCtrl);
  const url = new URL(window.location);
  url.searchParams.set('ctrl', newCtrl);
  history.replaceState(null, '', url);
  document.getElementById('controllerSelect').value = newCtrl;
  render();
}

function detectController() {
  const params = new URLSearchParams(window.location.search);
  if (params.get('ctrl') && CONTROLLER_BUTTON_MAP[params.get('ctrl')]) return params.get('ctrl');
  const stored = localStorage.getItem('mappingManagerController');
  if (stored && CONTROLLER_BUTTON_MAP[stored]) return stored;
  return 'xbox';
}

const BUTTON_STYLES = {
  A: { bg:"#107C10", text:"#fff", label:"A" },
  B: { bg:"#E81123", text:"#fff", label:"B" },
  X: { bg:"#0078D7", text:"#fff", label:"X" },
  Y: { bg:"#FFC300", text:"#1a1a1a", label:"Y" },
  LB: { bg:"#555", text:"#fff", label:"LB" },
  RB: { bg:"#555", text:"#fff", label:"RB" },
  LT: { bg:"#666", text:"#fff", label:"LT" },
  RT: { bg:"#666", text:"#fff", label:"RT" },
  LS: { bg:"#C23B22", text:"#fff", label:"LS" },
  RS: { bg:"#2E8B57", text:"#fff", label:"RS" },
  "LS:X": { bg:"#C23B22", text:"#fff", label:"LS↔" },
  "LS:Y": { bg:"#C23B22", text:"#fff", label:"LS↕" },
  "LS:XY": { bg:"#C23B22", text:"#fff", label:"LS✦" },
  "LS:Right": { bg:"#C23B22", text:"#fff", label:"LS→" },
  "LS:Left":  { bg:"#C23B22", text:"#fff", label:"LS←" },
  "LS:Up":    { bg:"#C23B22", text:"#fff", label:"LS↑" },
  "LS:Down":  { bg:"#C23B22", text:"#fff", label:"LS↓" },
  "RS:X": { bg:"#2E8B57", text:"#fff", label:"RS↔" },
  "RS:Y": { bg:"#2E8B57", text:"#fff", label:"RS↕" },
  "RS:XY": { bg:"#2E8B57", text:"#fff", label:"RS✦" },
  "RS:Right": { bg:"#2E8B57", text:"#fff", label:"RS→" },
  "RS:Left":  { bg:"#2E8B57", text:"#fff", label:"RS←" },
  "RS:Up":    { bg:"#2E8B57", text:"#fff", label:"RS↑" },
  "RS:Down":  { bg:"#2E8B57", text:"#fff", label:"RS↓" },
  Start: { bg:"#333", text:"#fff", label:"≡" },
  Back: { bg:"#333", text:"#fff", label:"⧉" },
  "▲": { bg:"#222", text:"#fff", label:"▲" },
  "▼": { bg:"#222", text:"#fff", label:"▼" },
  "▶": { bg:"#222", text:"#fff", label:"▶" },
  "◀": { bg:"#222", text:"#fff", label:"◀" },
  "▲▶": { bg:"#222", text:"#fff", label:"▲▶" },
  "▼▶": { bg:"#222", text:"#fff", label:"▼▶" },
  "◀▼": { bg:"#222", text:"#fff", label:"◀▼" },
  "◀▲": { bg:"#222", text:"#fff", label:"◀▲" },
  LP1: { bg:"#4B0082", text:"#fff", label:"LP1" },
  LP2: { bg:"#4B0082", text:"#fff", label:"LP2" },
  RP1: { bg:"#5D4037", text:"#fff", label:"RP1" },
  RP2: { bg:"#5D4037", text:"#fff", label:"RP2" },
  Controller: { bg:"#1a1a1a", text:"#fff", label:"🎮" },
  // PlayStation
  '×': { bg:"#003087", text:"#fff", label:"×" },
  '○': { bg:"#E81123", text:"#fff", label:"○" },
  '□': { bg:"#c2185b", text:"#fff", label:"□" },
  '△': { bg:"#107C10", text:"#fff", label:"△" },
  L1:  { bg:"#555",    text:"#fff", label:"L1" },
  R1:  { bg:"#555",    text:"#fff", label:"R1" },
  L2:  { bg:"#666",    text:"#fff", label:"L2" },
  R2:  { bg:"#666",    text:"#fff", label:"R2" },
  Share:   { bg:"#333", text:"#fff", label:"Share" },
  Create:  { bg:"#333", text:"#fff", label:"Create" },
  Options: { bg:"#333", text:"#fff", label:"Options" },
  // Nintendo Switch
  L:  { bg:"#555", text:"#fff", label:"L"  },
  R:  { bg:"#555", text:"#fff", label:"R"  },
  ZL: { bg:"#666", text:"#fff", label:"ZL" },
  ZR: { bg:"#666", text:"#fff", label:"ZR" },
  '−': { bg:"#333", text:"#fff", label:"−" },
  '+': { bg:"#333", text:"#fff", label:"+" },
};

const GAMEPAD_BUTTON_MAP = {
  0:"A", 1:"B", 2:"X", 3:"Y", 4:"LB", 5:"RB", 6:"LT", 7:"RT",
  8:"Back", 9:"Start", 10:"LS", 11:"RS", 12:"▲", 13:"▼", 14:"◀", 15:"▶",
};
const AXIS_THRESHOLD = 0.5;
const LS_INPUTS = new Set(["LS:X","LS:Y","LS:XY","LS:Right","LS:Left","LS:Up","LS:Down"]);
const RS_INPUTS = new Set(["RS:X","RS:Y","RS:XY","RS:Right","RS:Left","RS:Up","RS:Down"]);

// ── Meta block identifiers ──
const META_IDS = {
  ROOT:        '__MM_META__',
  SYS:         '__MM_SYS__',
  SYS_HEADER:  '__MM_SYS_HEADER__',
  SYS_SECTION: '__MM_SYS_SECTION__',
  SYS_ROW:     '__MM_SYS_ROW__',
  SYS_SUBCAT:  '__MM_SYS_SUBCAT__',
  SYS_MISC:    '__MM_SYS_MISC__',
  USER:        '__MM_USER__',
};
const META_ID_SET = new Set(Object.values(META_IDS));

function getTypeLabels() { return { category:t("type.category"), mapping:t("type.mapping"), separator:t("type.separator"), pagebreak:t("type.pagebreak") }; }
const TYPE_COLORS = { category:"var(--accent-yellow)", mapping:"var(--accent-blue)", separator:"var(--text-dim)", pagebreak:"var(--accent-violet)" };

// ═══════════════════════════════════════════════════════════════════════════
// UTILITY
// ═══════════════════════════════════════════════════════════════════════════

function genId() { return nextId++; }
function esc(s) { return String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;"); }

function parseMappingTokens(str) {
  if (!str) return [];
  const tokens = [];
  let i = 0;
  while (i < str.length) {
    if (str[i] === '[') {
      const end = str.indexOf(']', i + 1);
      if (end !== -1) {
        tokens.push({ type: 'button', value: str.substring(i + 1, end) });
        i = end + 1;
      } else {
        tokens.push({ type: 'text', value: str[i] });
        i++;
      }
    } else if (str[i] === '{') {
      const end = str.indexOf('}', i + 1);
      if (end !== -1) {
        tokens.push({ type: 'key', value: str.substring(i + 1, end) });
        i = end + 1;
      } else {
        tokens.push({ type: 'text', value: str[i] });
        i++;
      }
    } else {
      let textEnd = i;
      while (textEnd < str.length && str[textEnd] !== '[' && str[textEnd] !== '{') textEnd++;
      tokens.push({ type: 'text', value: str.substring(i, textEnd) });
      i = textEnd;
    }
  }
  return tokens;
}
// Legacy compat: extract button names only (used by gamepad modal)
function parseMappingButtons(str) {
  return parseMappingTokens(str).filter(t => t.type === 'button').map(t => t.value);
}
function toMappingString(buttons) {
  return buttons.map(b => `[${b}]`).join('');
}

function buttonBadgeHTML(name) {
  const s = BUTTON_STYLES[name] || { bg:"#555", text:"#fff", label:name };
  return `<span class="btn-badge" style="background:${s.bg};color:${s.text}">${esc(s.label)}</span>`;
}
function keyBadgeHTML(name) {
  return `<span class="key-badge">${esc(name)}</span>`;
}
function mappingDisplayHTML(mapping) {
  const tokens = parseMappingTokens(mapping);
  if (tokens.length === 0) return '';
  return tokens.map(tok => {
    if (tok.type === 'button') return buttonBadgeHTML(tok.value);
    if (tok.type === 'key') return keyBadgeHTML(tok.value);
    return `<span class="mapping-text">${esc(tok.value)}</span>`;
  }).join('');
}

function csvEscape(val) {
  const s = String(val ?? "");
  if (s.includes(",") || s.includes('"') || s.includes("\n")) return '"' + s.replace(/"/g,'""') + '"';
  return s;
}
function csvParseLine(line) {
  const result = []; let current = "", inQ = false;
  for (let i = 0; i < line.length; i++) {
    const ch = line[i];
    if (inQ) { if (ch==='"' && line[i+1]==='"'){current+='"';i++;} else if(ch==='"'){inQ=false;} else{current+=ch;} }
    else { if(ch==='"'){inQ=true;} else if(ch===','){result.push(current);current="";} else{current+=ch;} }
  }
  result.push(current);
  return result;
}
function itemsToCSV() {
  const header = "id,parentId,type,name,mapping,exclude";
  const rows = items.map(it => [it.id, it.parentId??"", it.type, csvEscape(it.name), csvEscape(it.mapping), it.exclude||0].join(","));
  return [header, ...rows].join("\n");
}
function csvToItems(text) {
  const lines = text.split(/\r?\n/).filter(l=>l.trim());
  if (lines.length < 1) return [];
  const dataLines = lines[0].startsWith("id,") ? lines.slice(1) : lines;
  let maxId = 0;
  const result = dataLines.map(line => {
    const f = csvParseLine(line);
    const id = parseInt(f[0]) || genId();
    if (id > maxId) maxId = id;
    return { id, parentId: f[1] ? parseInt(f[1]) || null : null, type: f[2]||"mapping", name: f[3]||"", mapping: f[4]||"", exclude: parseInt(f[5])||0 };
  });
  nextId = maxId + 1;
  return result;
}

function getDepth(item) {
  let d = 0, cur = item;
  while (cur.parentId) { cur = items.find(it=>it.id===cur.parentId); if(!cur) break; d++; }
  return d;
}
function getOrderedItems() {
  const result = [], inResult = new Set();
  // Mark all descendants of a collapsed item so the orphan code below won't add them
  function markDescendants(id) {
    items.filter(it=>it.parentId===id).forEach(child => {
      inResult.add(child.id);
      markDescendants(child.id);
    });
  }
  function add(item, skipChildren) {
    result.push(item);
    inResult.add(item.id);
    if (skipChildren) {
      markDescendants(item.id);
    } else {
      items.filter(it=>it.parentId===item.id).forEach(child => add(child, collapsedIds.has(child.id)));
    }
  }
  items.filter(it=>!it.parentId).forEach(item => add(item, collapsedIds.has(item.id)));
  // Add any orphans (items whose parent no longer exists)
  items.forEach(it => { if(!inResult.has(it.id)) result.push(it); });
  return result;
}

function toggleCollapse(id, e) {
  if (e) e.stopPropagation();
  if (collapsedIds.has(id)) collapsedIds.delete(id);
  else collapsedIds.add(id);
  render();
}

function hasChildren(id) {
  return items.some(it => it.parentId === id);
}

function getTreeConnectors(item, ordered) {
  if (!item.parentId) return '';
  const chain = [];
  let cur = item;
  while (cur.parentId) {
    chain.push(cur);
    cur = items.find(it => it.id === cur.parentId);
    if (!cur) break;
  }
  chain.reverse();
  let html = '';
  for (let i = 0; i < chain.length; i++) {
    const node = chain[i];
    const siblings = ordered.filter(it => it.parentId === node.parentId);
    const isLast = siblings.length === 0 || siblings[siblings.length - 1].id === node.id;
    if (i === chain.length - 1) {
      // Branch connector for the item itself
      html += `<span class="tree-guide${isLast ? ' tree-guide-last' : ''}"><span class="tree-guide-branch"></span></span>`;
    } else {
      // Vertical line for ancestor level (or empty if ancestor is last child)
      if (isLast) {
        html += `<span class="tree-guide"></span>`;
      } else {
        html += `<span class="tree-guide"><span class="tree-guide-line"></span></span>`;
      }
    }
  }
  return html;
}

function getNextMappingItem(afterId) {
  const ordered = getOrderedItems();
  const idx = ordered.findIndex(it=>it.id===afterId);
  for (let i=idx+1; i<ordered.length; i++) { if(ordered[i].type==="mapping") return ordered[i].id; }
  return null;
}

// ─── Meta block utilities ──────────────────────────────────────────────────

function isColorCode(val) {
  return /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/.test(String(val || '').trim());
}

function isInSubtreeOf(id, ancestorId) {
  let cur = items.find(it => it.id === id);
  while (cur) {
    if (cur.id === ancestorId) return true;
    if (!cur.parentId) return false;
    cur = items.find(it => it.id === cur.parentId);
  }
  return false;
}

function findMetaRoot() {
  return items.find(it => it.name === META_IDS.ROOT && it.parentId === null) || null;
}

function findMetaItemByName(name) {
  return items.find(it => it.name === name) || null;
}

function isInMetaBlock(id) {
  const root = findMetaRoot();
  return root ? isInSubtreeOf(id, root.id) : false;
}

// Returns true if item is __MM_META__ root itself, or __MM_SYS__ / its descendants
// (= cannot be renamed / moved / added to)
function isMetaSysRestricted(id) {
  const item = items.find(it => it.id === id);
  if (!item) return false;
  if (item.name === META_IDS.ROOT && item.parentId === null) return true;
  const sys = findMetaItemByName(META_IDS.SYS);
  if (!sys) return false;
  return item.id === sys.id || isInSubtreeOf(id, sys.id);
}

function readMetaSettings() {
  const root = findMetaRoot();
  if (!root) return null;
  const sys = items.find(it => it.parentId === root.id && it.name === META_IDS.SYS);
  if (!sys) return null;
  const result = {};
  for (const ch of items.filter(it => it.parentId === sys.id)) {
    if (ch.type === 'mapping') {
      result[ch.name] = ch.mapping;
    } else if (ch.type === 'category') {
      for (const gc of items.filter(it => it.parentId === ch.id && it.type === 'mapping')) {
        result[gc.name] = gc.mapping;
      }
    }
  }
  return Object.keys(result).length > 0 ? result : null;
}

function hasMetaSettings() {
  return readMetaSettings() !== null;
}

// ═══════════════════════════════════════════════════════════════════════════
// UNDO
// ═══════════════════════════════════════════════════════════════════════════

function pushUndo() {
  undoStack.push(JSON.stringify(items));
  if (undoStack.length > 30) undoStack.shift();
  document.getElementById("undoBtn").disabled = false;
}
function undo() {
  if (undoStack.length === 0) return;
  items = JSON.parse(undoStack.pop());
  document.getElementById("undoBtn").disabled = undoStack.length === 0;
  render();
}

// ═══════════════════════════════════════════════════════════════════════════
// RENDERING
// ═══════════════════════════════════════════════════════════════════════════

function render() {
  const list = document.getElementById("item-list");
  const ordered = getOrderedItems();

  let html = "";
  if (ordered.length === 0) {
    html = `<div class="list-empty-msg">${t("list.empty")}</div>`;
  }

  for (const item of ordered) {
    const sel = item.id === selectedId ? " selected" : "";
    const isCat = item.type === "category";
    const isMap = item.type === "mapping";
    const isDeco = item.type === "separator" || item.type === "pagebreak";
    const treeHTML = getTreeConnectors(item, ordered);

    // メタブロック判定
    const isMeta    = isInMetaBlock(item.id);
    const isSysLock = isMetaSysRestricted(item.id); // 名前変更・移動・追加 不可
    const metaClass = isMeta ? " is-meta" : "";

    // 除外状態（メタ行はスタイル適用しない）
    const isExcluded = !!item.exclude;
    const ancestorExcluded = isAncestorExcluded(item.id);
    const excludeClass = isMeta ? "" : (ancestorExcluded ? " is-inherited-exclude" : (isExcluded ? " is-excluded" : ""));

    html += `<div class="item-row${sel}${item.type === 'separator' ? ' is-separator' : ''}${isCat ? ' is-category' : ''}${excludeClass}${metaClass}" data-id="${item.id}" style="padding-left:24px"
      onclick="selectItem(${item.id})" oncontextmenu="showContextMenu(event, ${item.id})"
      ondragover="onDragOver(event, ${item.id})" ondrop="onDrop(event, ${item.id})"
      ondragleave="onDragLeave(event, ${item.id})">`;

    // ドラッグハンドル（SYS制限アイテムは無効）
    if (isSysLock) {
      html += `<div class="drag-handle drag-handle-disabled" title="">⠿</div>`;
    } else {
      html += `<div class="drag-handle" draggable="true"
        ondragstart="onDragStart(event, ${item.id})" ondragend="onDragEnd(event)"
        title="${t("drag.tooltip")}">⠿</div>`;
    }

    // 出力チェックボックス（メタ行は非表示）
    if (isMeta) {
      html += `<div class="col-output"></div>`;
    } else {
      const checkboxChecked = (!isExcluded && !ancestorExcluded) ? 'checked' : '';
      const checkboxDisabled = ancestorExcluded ? 'disabled' : '';
      const toggleTitle = ancestorExcluded ? t('output.inheritedOff') : (isExcluded ? t('output.off') : t('output.on'));
      const checkboxOnclick = ancestorExcluded
        ? `onclick="event.stopPropagation()"`
        : `onclick="toggleExclude(${item.id}); event.stopPropagation()"`;
      html += `<div class="col-output"><input type="checkbox" class="output-checkbox"
        ${checkboxChecked} ${checkboxDisabled}
        aria-label="${esc(toggleTitle)}" title="${esc(toggleTitle)}"
        ${checkboxOnclick}></div>`;
    }

    // Tree connectors
    html += treeHTML;

    // Type selector（SYS制限アイテムは disabled）
    const typeSelectAttrs = isSysLock
      ? 'disabled'
      : `onchange="selectedId=${item.id}; updateItem(${item.id}, 'type', this.value); event.stopPropagation()"`;
    html += `<div class="col-type"><select class="type-select" style="color:${TYPE_COLORS[item.type]||'var(--text-subtle)'}"
      ${typeSelectAttrs}>`;
    for (const [k,v] of Object.entries(getTypeLabels())) {
      html += `<option value="${k}" ${k===item.type?"selected":""} style="background:var(--bg-ctx-menu);color:${TYPE_COLORS[k]}">${v}</option>`;
    }
    html += `</select></div>`;

    if (isDeco) {
      if (item.type === "separator") html += `<div class="deco-line"></div>`;
      else html += `<div class="deco-pagebreak"><span>${t("deco.pagebreak")}</span></div>`;
    } else {
      // Name
      html += `<div class="col-name">`;
      if (isCat) {
        const hasKids = hasChildren(item.id);
        const isCollapsed = collapsedIds.has(item.id);
        if (hasKids) {
          html += `<span class="collapse-toggle${isCollapsed?' collapsed':''}" onclick="toggleCollapse(${item.id}, event)">${isCollapsed ? '▶' : '▼'}</span>`;
        } else {
          html += `<span class="col-name-spacer"></span>`;
        }
        html += `<span class="cat-folder-icon">${isMeta ? '⚙' : '📁'}</span>`;
      }
      if (isSysLock) {
        // SYS制限アイテムは名前を読み取り専用で表示
        html += `<input class="name-input${isCat?' is-category':''}" value="${esc(item.name)}" readonly
          onclick="selectItemNoRender(${item.id}); event.stopPropagation()">`;
      } else {
        html += `<input class="name-input${isCat?' is-category':''}" value="${esc(item.name)}"
          placeholder="${isCat ? t('placeholder.category') : t('placeholder.mapping')}"
          onchange="updateItem(${item.id}, 'name', this.value)"
          onclick="selectItemNoRender(${item.id}); event.stopPropagation()"
          onkeydown="handleNameInputKeydown(event, ${item.id})">`;
      }
      html += `</div>`;

      // Mapping
      if (isMap) {
        html += `<div class="col-mapping">`;
        if (isSysLock) {
          // SYS制限アイテムはマッピング値を読み取り専用で表示（カラーコードはスウォッチ付き）
          const rawVal = item.mapping.trim();
          const showSwatch = rawVal.startsWith('#');
          let swatchHtml = '';
          if (showSwatch) {
            swatchHtml = isColorCode(rawVal)
              ? `<span class="color-swatch" style="background:${rawVal}"></span>`
              : `<span class="color-swatch color-swatch-invalid">?</span>`;
          }
          const valDisplay = item.mapping
            ? `<span class="mapping-text">${esc(item.mapping)}</span>`
            : `<span class="mapping-text" style="opacity:0.4">—</span>`;
          html += `<div class="mapping-box meta-readonly">${valDisplay}${swatchHtml}</div>`;
        } else {
          const badges = mappingDisplayHTML(item.mapping);
          html += `<div class="mapping-box${badges?'':' empty'}" data-item-id="${item.id}"
            onclick="selectItemNoRender(${item.id}); startMappingEdit(${item.id}); event.stopPropagation()">`;
          html += badges || t('mapping.clickToEdit');
          html += `</div>`;
          html += `<button class="gamepad-btn" onclick="selectItemNoRender(${item.id}); openGamepadModal(${item.id}); event.stopPropagation()" title="${t('gamepad.tooltip')}">🎮</button>`;
          html += `<button class="gamepad-btn" onclick="selectItemNoRender(${item.id}); openKeyboardModal(${item.id}); event.stopPropagation()" title="${t('keyboard.tooltip')}">⌨️</button>`;
        }
        html += `</div>`;
      } else {
        html += `<div class="col-mapping"></div>`;
      }
    }

    html += `<button class="row-delete-btn" onclick="deleteItem(${item.id}); event.stopPropagation()" title="${t('delete.tooltip')}">×</button>`;
    html += `</div>`;
  }
  list.innerHTML = html;
}

// ═══════════════════════════════════════════════════════════════════════════
// ITEM OPERATIONS
// ═══════════════════════════════════════════════════════════════════════════

function isAncestorExcluded(id) {
  const item = items.find(it => it.id === id);
  if (!item || !item.parentId) return false;
  let cur = items.find(it => it.id === item.parentId);
  while (cur) {
    if (cur.exclude) return true;
    if (!cur.parentId) break;
    cur = items.find(it => it.id === cur.parentId);
  }
  return false;
}

function toggleExclude(id) {
  pushUndo();
  const item = items.find(it => it.id === id);
  if (item) { item.exclude = item.exclude ? 0 : 1; render(); }
}

function updateItem(id, field, value) {
  pushUndo();
  const item = items.find(it=>it.id===id);
  if (item) { item[field] = value; render(); }
}
function selectItem(id) { selectedId = id; render(); }

// ④ フォーカスを失わずに選択状態をDOM上で即反映する軽量版 select
// render() を呼ばないため、テキスト入力中・インライン編集中でも安全に使用できる
function selectItemNoRender(id) {
  if (selectedId === id) return;
  // 前の選択行から selected クラスを取り除く
  if (selectedId !== null) {
    const prevRow = document.querySelector(`.item-row[data-id="${selectedId}"]`);
    if (prevRow) prevRow.classList.remove('selected');
  }
  selectedId = id;
  // 新しい選択行に selected クラスを付与
  const newRow = document.querySelector(`.item-row[data-id="${id}"]`);
  if (newRow) newRow.classList.add('selected');
}

function scrollSelectedIntoView() {
  requestAnimationFrame(() => {
    if (!selectedId) return;
    const row = document.querySelector(`.item-row[data-id="${selectedId}"]`);
    if (!row) return;
    const addBar = document.getElementById('add-bar');
    const statusBar = document.getElementById('status-bar');
    const addBarH = addBar ? addBar.offsetHeight : 0;
    const statusH = statusBar ? statusBar.offsetHeight : 0;
    const margin = addBarH + statusH;
    const rowBottom = row.getBoundingClientRect().bottom;
    const visibleBottom = window.innerHeight - margin;
    if (rowBottom > visibleBottom) {
      const extra = rowBottom - visibleBottom + 8;
      window.scrollBy({ top: extra, behavior: 'smooth' });
    }
  });
}

function addItem(type, afterId) {
  pushUndo();
  const newItem = { id:genId(), parentId:null, type, name:"", mapping:"", exclude:0 };
  if (afterId !== undefined) {
    const idx = items.findIndex(it=>it.id===afterId);
    const target = items[idx];
    if (target && target.type === "category") newItem.parentId = target.id;
    else if (target) newItem.parentId = target.parentId;
    items.splice(idx+1, 0, newItem);
  } else {
    items.push(newItem);
  }
  selectedId = newItem.id;
  render();
  scrollSelectedIntoView();
}
function insertItemBefore(id) {
  pushUndo();
  const idx = items.findIndex(it=>it.id===id);
  const target = items[idx];
  const newItem = { id:genId(), parentId:target?.parentId||null, type:"mapping", name:"", mapping:"", exclude:0 };
  items.splice(idx, 0, newItem);
  selectedId = newItem.id;
  render();
  scrollSelectedIntoView();
}
function deleteItem(id) {
  pushUndo();
  const toDelete = getDescendantIds(id);
  toDelete.add(id);
  items = items.filter(it => !toDelete.has(it.id));
  if (toDelete.has(selectedId)) selectedId = null;
  render();
}

// Get all descendant IDs of an item
function getDescendantIds(id) {
  const result = new Set();
  let changed = true;
  const seeds = new Set([id]);
  while (changed) {
    changed = false;
    items.forEach(it => {
      if (it.parentId && (seeds.has(it.parentId) || result.has(it.parentId)) && !result.has(it.id)) {
        result.add(it.id); changed = true;
      }
    });
  }
  return result;
}

// Collect an item and all its descendants as a subtree snapshot
function collectSubtree(id) {
  const root = items.find(it=>it.id===id);
  if (!root) return [];
  const descIds = getDescendantIds(id);
  const subtreeItems = [root, ...items.filter(it=>descIds.has(it.id))];
  return subtreeItems.map(it => ({...it})); // deep copy
}

// Paste a subtree: assign new IDs, remap internal parent pointers, set root's parent
function pasteSubtree(subtree, newParentId, insertIdx) {
  if (subtree.length === 0) return;
  const idMap = {};
  const rootOldId = subtree[0].id;
  // Generate new IDs
  subtree.forEach(it => { idMap[it.id] = genId(); });
  const newItems = subtree.map(it => ({
    ...it,
    id: idMap[it.id],
    parentId: it.id === rootOldId ? newParentId : (idMap[it.parentId] ?? it.parentId),
  }));
  // Insert into items array at position
  items.splice(insertIdx, 0, ...newItems);
}

function getSubtree(id) {
  // Return [item, ...descendants] in current items array order
  const descIds = getDescendantIds(id);
  return items.filter(it => it.id === id || descIds.has(it.id));
}

function moveUp(id) {
  pushUndo();
  const item = items.find(it => it.id === id);
  if (!item) return;
  const siblings = items.filter(it => it.parentId === item.parentId);
  const sibIdx = siblings.findIndex(it => it.id === id);
  if (sibIdx <= 0) return;
  const prevSibling = siblings[sibIdx - 1];

  // Collect both subtrees
  const itemSubtree = getSubtree(id);
  const prevSubtree = getSubtree(prevSibling.id);
  const allMoved = new Set([...itemSubtree, ...prevSubtree].map(it => it.id));

  // Find insertion point (start of prevSibling's subtree in items)
  const insertAt = items.findIndex(it => it.id === prevSibling.id);

  // Remove both subtrees from items
  items = items.filter(it => !allMoved.has(it.id));

  // Re-insert: item subtree first, then prevSibling subtree
  items.splice(insertAt, 0, ...itemSubtree, ...prevSubtree);
  render();
}

function moveDown(id) {
  pushUndo();
  const item = items.find(it => it.id === id);
  if (!item) return;
  const siblings = items.filter(it => it.parentId === item.parentId);
  const sibIdx = siblings.findIndex(it => it.id === id);
  if (sibIdx < 0 || sibIdx >= siblings.length - 1) return;
  const nextSibling = siblings[sibIdx + 1];

  // Collect both subtrees
  const itemSubtree = getSubtree(id);
  const nextSubtree = getSubtree(nextSibling.id);
  const allMoved = new Set([...itemSubtree, ...nextSubtree].map(it => it.id));

  // Find insertion point (start of item's subtree in items)
  const insertAt = items.findIndex(it => it.id === id);

  // Remove both subtrees from items
  items = items.filter(it => !allMoved.has(it.id));

  // Re-insert: nextSibling subtree first, then item subtree
  items.splice(insertAt, 0, ...nextSubtree, ...itemSubtree);
  render();
}

function copyItem(id) {
  clipboard = collectSubtree(id);
  clipboardCut = false;
}
function cutItem(id) {
  clipboard = collectSubtree(id);
  clipboardCut = true;
  clipboardCutRootId = id;
}

function pasteAbove(targetId) {
  if (!clipboard || clipboard.length === 0) return;
  pushUndo();
  if (clipboardCut) {
    const cutIds = new Set(clipboard.map(it=>it.id));
    items = items.filter(it => !cutIds.has(it.id));
  }
  const idx = items.findIndex(it=>it.id===targetId);
  const target = items[idx];
  pasteSubtree(clipboard, target?.parentId ?? null, idx < 0 ? items.length : idx);
  if (clipboardCut) { clipboard = null; clipboardCut = false; }
  render();
}
function pasteBelow(targetId) {
  if (!clipboard || clipboard.length === 0) return;
  pushUndo();
  if (clipboardCut) {
    const cutIds = new Set(clipboard.map(it=>it.id));
    items = items.filter(it => !cutIds.has(it.id));
  }
  const idx = items.findIndex(it=>it.id===targetId);
  const target = items[idx];
  pasteSubtree(clipboard, target?.parentId ?? null, idx < 0 ? items.length : idx + 1);
  if (clipboardCut) { clipboard = null; clipboardCut = false; }
  render();
}

// ═══════════════════════════════════════════════════════════════════════════
// DRAG AND DROP REORDER
// ═══════════════════════════════════════════════════════════════════════════

let dragItemId = null;
let currentDropZone = null; // "above" | "child" | "below"

function isDescendantOf(itemId, ancestorId) {
  // Check if itemId is a descendant of ancestorId
  let cur = items.find(it=>it.id===itemId);
  while (cur && cur.parentId) {
    if (cur.parentId === ancestorId) return true;
    cur = items.find(it=>it.id===cur.parentId);
  }
  return false;
}

// Find the last index (in items array) of an item's subtree
function getSubtreeLastIndex(id) {
  const descIds = getDescendantIds(id);
  let lastIdx = items.findIndex(it=>it.id===id);
  items.forEach((it, idx) => {
    if (descIds.has(it.id) && idx > lastIdx) lastIdx = idx;
  });
  return lastIdx;
}

function getDropZone(e, targetId) {
  const row = e.currentTarget;
  const rect = row.getBoundingClientRect();
  const y = e.clientY - rect.top;
  const h = rect.height;
  const target = items.find(it=>it.id===targetId);
  const isCat = target && target.type === "category";

  if (isCat) {
    // 3 zones for categories: top 25% | middle 50% | bottom 25%
    if (y < h * 0.25) return "above";
    if (y > h * 0.75) return "below";
    return "child";
  } else {
    // 2 zones for non-categories: top 50% | bottom 50%
    return y < h * 0.5 ? "above" : "below";
  }
}

function clearDropIndicators() {
  document.querySelectorAll(".item-row").forEach(r => {
    r.style.borderTop = "";
    r.style.borderBottom = "";
    r.classList.remove("drop-child");
  });
}

function onDragStart(e, id) {
  dragItemId = id;
  e.dataTransfer.effectAllowed = "move";
  e.dataTransfer.setData("text/plain", String(id));
  setTimeout(() => {
    const el = document.querySelector(`.item-row[data-id="${id}"]`);
    if (el) el.style.opacity = "0.3";
  }, 0);
}

function onDragEnd(e) {
  const el = document.querySelector(`.item-row[data-id="${dragItemId}"]`);
  if (el) el.style.opacity = "";
  dragItemId = null;
  currentDropZone = null;
  clearDropIndicators();
}

function onDragOver(e, targetId) {
  if (dragItemId === null || dragItemId === targetId) return;
  // Prevent dropping onto own descendant
  if (isDescendantOf(targetId, dragItemId)) return;
  e.preventDefault();
  e.dataTransfer.dropEffect = "move";

  const zone = getDropZone(e, targetId);
  currentDropZone = zone;

  clearDropIndicators();
  const row = e.currentTarget;
  if (zone === "above") {
    row.style.borderTop = "2px solid var(--accent-blue)";
  } else if (zone === "below") {
    row.style.borderBottom = "2px solid var(--accent-blue)";
  } else {
    row.classList.add("drop-child");
  }
}

function onDragLeave(e, targetId) {
  const row = e.currentTarget;
  // Only clear if actually leaving (not entering a child element)
  const related = e.relatedTarget;
  if (related && row.contains(related)) return;
  row.style.borderTop = "";
  row.style.borderBottom = "";
  row.classList.remove("drop-child");
}

function onDrop(e, targetId) {
  e.preventDefault();
  if (dragItemId === null || dragItemId === targetId) return;
  if (isDescendantOf(targetId, dragItemId)) return;

  const zone = getDropZone(e, targetId);
  const target = items.find(it=>it.id===targetId);
  const dragItem = items.find(it=>it.id===dragItemId);
  if (!target || !dragItem) return;

  pushUndo();

  // Collect the subtree to move (for categories, includes all descendants)
  const dragDescIds = getDescendantIds(dragItemId);
  const allDragIds = new Set([dragItemId, ...dragDescIds]);
  const subtree = items.filter(it => allDragIds.has(it.id));

  // Remove subtree from items
  items = items.filter(it => !allDragIds.has(it.id));

  if (zone === "child") {
    // Make child of target category
    dragItem.parentId = targetId;
    // Insert after target's last descendant
    const lastIdx = getSubtreeLastIndex(targetId);
    items.splice(lastIdx + 1, 0, ...subtree);
  } else if (zone === "above") {
    // Insert as sibling before target
    dragItem.parentId = target.parentId;
    const targetIdx = items.findIndex(it=>it.id===targetId);
    items.splice(targetIdx, 0, ...subtree);
  } else {
    // Insert as sibling after target (and its subtree)
    dragItem.parentId = target.parentId;
    const lastIdx = getSubtreeLastIndex(targetId);
    items.splice(lastIdx + 1, 0, ...subtree);
  }

  clearDropIndicators();
  dragItemId = null;
  currentDropZone = null;
  render();
}

// ═══════════════════════════════════════════════════════════════════════════
// INLINE MAPPING EDIT
// ═══════════════════════════════════════════════════════════════════════════

function startMappingEdit(id) {
  const item = items.find(it=>it.id===id);
  if (!item) return;
  const box = document.querySelector(`.mapping-box[data-item-id="${id}"]`);
  if (!box) return;
  box.innerHTML = `<input class="mapping-edit-input" value="${esc(item.mapping)}"
    onblur="finishMappingEdit(${id}, this.value)"
    onkeydown="if(event.key==='Enter'||event.key==='Escape') this.blur()">`;
  const input = box.querySelector("input");
  input.focus(); input.select();
  input.onclick = function(e) { e.stopPropagation(); };
}
function handleNameInputKeydown(e, id) {
  if (e.key !== 'Enter') return;
  e.preventDefault();
  // Commit current value
  updateItem(id, 'name', e.target.value);

  const ordered = getOrderedItems();
  const idx = ordered.findIndex(it => it.id === id);
  const current = items.find(it => it.id === id);

  // Find next sibling-or-deeper item that has a name input (category or mapping)
  for (let i = idx + 1; i < ordered.length; i++) {
    const next = ordered[i];
    if (next.type === 'category' || next.type === 'mapping') {
      selectedId = next.id;
      render();
      scrollSelectedIntoView();
      const input = document.querySelector(`.item-row[data-id="${next.id}"] .name-input`);
      if (input) { input.focus(); input.select(); }
      return;
    }
  }

  // No next item found: create new mapping item
  // If current item is a category, create inside it.
  // If current item is a mapping inside a category, create as sibling inside same category.
  const parentId = current
    ? (current.type === 'category' ? current.id : (current.parentId ?? null))
    : null;

  pushUndo();
  const newItem = { id: genId(), parentId, type: 'mapping', name: '', mapping: '', exclude: 0 };

  if (parentId !== null) {
    // Insert after the last child of that parent in the items array
    const siblings = items.filter(it => it.parentId === parentId);
    if (siblings.length > 0) {
      const lastSibling = siblings[siblings.length - 1];
      const lastIdx = getSubtreeLastIndex(lastSibling.id);
      items.splice(lastIdx + 1, 0, newItem);
    } else {
      // Category has no children yet; insert right after category in array
      const catIdx = items.findIndex(it => it.id === parentId);
      items.splice(catIdx + 1, 0, newItem);
    }
  } else {
    items.push(newItem);
  }

  selectedId = newItem.id;
  render();
  scrollSelectedIntoView();
  const input = document.querySelector(`.item-row[data-id="${newItem.id}"] .name-input`);
  if (input) { input.focus(); }
}

function finishMappingEdit(id, value) {
  updateItem(id, "mapping", value);
}

// ═══════════════════════════════════════════════════════════════════════════
// CONTEXT MENU
// ═══════════════════════════════════════════════════════════════════════════

function showContextMenu(e, id) {
  e.preventDefault(); e.stopPropagation();
  selectItemNoRender(id);
  const menu = document.getElementById("ctx-menu");
  const hasClip = !!clipboard;
  const sysLock = isMetaSysRestricted(id);

  if (sysLock) {
    menu.innerHTML = `
      <div class="ctx-item disabled">${t("ctx.insertAbove")}</div>
      <div class="ctx-item disabled">${t("ctx.insertBelow")}</div>
      <div class="ctx-sep"></div>
      <div class="ctx-item disabled">${t("ctx.moveUp")}</div>
      <div class="ctx-item disabled">${t("ctx.moveDown")}</div>
      <div class="ctx-sep"></div>
      <div class="ctx-item" onclick="hideContextMenu();copyItem(${id})">${t("ctx.copy")}</div>
      <div class="ctx-item disabled">${t("ctx.cut")}</div>
      <div class="ctx-item disabled">${t("ctx.pasteAbove")}</div>
      <div class="ctx-item disabled">${t("ctx.pasteBelow")}</div>
      <div class="ctx-sep"></div>
      <div class="ctx-item" onclick="hideContextMenu();deleteItem(${id})">${t("ctx.delete")}</div>
    `;
  } else {
    menu.innerHTML = `
      <div class="ctx-item" onclick="hideContextMenu();insertItemBefore(${id})">${t("ctx.insertAbove")}</div>
      <div class="ctx-item" onclick="hideContextMenu();addItem('mapping',${id})">${t("ctx.insertBelow")}</div>
      <div class="ctx-sep"></div>
      <div class="ctx-item" onclick="hideContextMenu();moveUp(${id})">${t("ctx.moveUp")}</div>
      <div class="ctx-item" onclick="hideContextMenu();moveDown(${id})">${t("ctx.moveDown")}</div>
      <div class="ctx-sep"></div>
      <div class="ctx-item" onclick="hideContextMenu();copyItem(${id})">${t("ctx.copy")}</div>
      <div class="ctx-item" onclick="hideContextMenu();cutItem(${id})">${t("ctx.cut")}</div>
      <div class="ctx-item${hasClip?'':' disabled'}" onclick="${hasClip?`hideContextMenu();pasteAbove(${id})`:''}">${t("ctx.pasteAbove")}</div>
      <div class="ctx-item${hasClip?'':' disabled'}" onclick="${hasClip?`hideContextMenu();pasteBelow(${id})`:''}">${t("ctx.pasteBelow")}</div>
      <div class="ctx-sep"></div>
      <div class="ctx-item" onclick="hideContextMenu();deleteItem(${id})">${t("ctx.delete")}</div>
    `;
  }
  menu.style.left = e.clientX + "px";
  menu.style.top = e.clientY + "px";
  menu.classList.add("show");
  const rect = menu.getBoundingClientRect();
  const margin = 4;
  if (rect.right > window.innerWidth - margin)  menu.style.left = (e.clientX - rect.width)  + "px";
  if (rect.bottom > window.innerHeight - margin) menu.style.top  = (e.clientY - rect.height) + "px";
}
function hideContextMenu() { document.getElementById("ctx-menu").classList.remove("show"); }
document.addEventListener("mousedown", e => {
  const menu = document.getElementById("ctx-menu");
  if (!menu.contains(e.target)) hideContextMenu();
});

// ═══════════════════════════════════════════════════════════════════════════
// FILE OPERATIONS
// ═══════════════════════════════════════════════════════════════════════════

function setFileName(name) {
  fileName = name;
  document.getElementById("filenameDisplay").textContent = name;
}
function startFileNameEdit() {
  const display = document.getElementById("filenameDisplay");
  const edit = document.getElementById("filenameEdit");
  edit.value = fileName;
  display.style.display = "none";
  edit.style.display = "";
  edit.focus();
  // .csv の前にカーソルを置く
  const dotIdx = edit.value.lastIndexOf(".");
  if (dotIdx > 0) edit.setSelectionRange(0, dotIdx);
  else edit.select();
}
function finishFileNameEdit() {
  const edit = document.getElementById("filenameEdit");
  const display = document.getElementById("filenameDisplay");
  let val = edit.value.trim();
  if (val && !val.endsWith(".csv")) val += ".csv";
  if (val) setFileName(val);
  edit.style.display = "none";
  display.style.display = "";
}
function handleNew() {
  if (items.length > 0 && !confirm(t("confirm.new"))) return;
  nextId = 1; items = []; undoStack = []; selectedId = null;
  setFileName("new_mapping.csv");
  document.getElementById("undoBtn").disabled = true;
  clearLocalStorage();
  render();
}
function openCSV() { document.getElementById("csvInput").click(); }
function handleOpenCSV(e) {
  const file = e.target.files[0]; if(!file) return;
  const reader = new FileReader();
  reader.onload = ev => {
    items = csvToItems(ev.target.result);
    undoStack=[];
    setFileName(file.name);
    collapseMetaRootIfExists();
    applyRecommendedCtrlIfExists();
    render();
  };
  reader.readAsText(file); e.target.value = "";
}
let _saveCsvBlobUrl = null;

function refreshSaveCsvHref() {
  if (_saveCsvBlobUrl) URL.revokeObjectURL(_saveCsvBlobUrl);
  const csv = itemsToCSV();
  const blob = new Blob([csv], {type: "text/csv;charset=utf-8"});
  _saveCsvBlobUrl = URL.createObjectURL(blob);
  const a = document.getElementById("saveCsvBtn");
  if (a) { a.href = _saveCsvBlobUrl; a.download = fileName; }
}

function handleSaveCSVClick(e) {
  // 左クリック時：href が更新済みならそのままダウンロード、未更新なら手動実行
  if (!_saveCsvBlobUrl) {
    e.preventDefault();
    refreshSaveCsvHref();
    document.getElementById("saveCsvBtn").click();
  }
  // 右クリックはcontextmenu → refreshSaveCsvHref() で href 更新済みのためそのまま
}

function saveCSV() {
  // Ctrl+S ショートカット用（アンカー経由で保存）
  refreshSaveCsvHref();
  document.getElementById("saveCsvBtn").click();
}

// ═══════════════════════════════════════════════════════════════════════════
// SAMPLE LOADER
// ═══════════════════════════════════════════════════════════════════════════

let samplesIndex = [];

async function loadSamplesIndex() {
  try {
    const res = await fetch(`samples/samples_index.json`);
    if (!res.ok) return;
    const data = await res.json();
    samplesIndex = data.samples || [];
    buildSampleDropdown();
  } catch(e) {
    console.warn('Could not load samples index:', e);
  }
}

function buildSampleDropdown() {
  const sel = document.getElementById('sampleSelect');
  if (!sel) return;
  // Keep the placeholder option
  while (sel.options.length > 1) sel.remove(1);
  for (const s of samplesIndex) {
    // langs指定がある場合は現在の言語が含まれているか確認（省略時は両言語で表示）
    if (s.langs && !s.langs.includes(currentLang)) continue;

    // nameがオブジェクトの場合は現在の言語を優先して取得、文字列の場合はそのまま使用
    const name = typeof s.name === 'object'
      ? (s.name[currentLang] || s.name.ja || s.name.en || '')
      : s.name;

    // fileがオブジェクトの場合は現在の言語のパスを取得、文字列の場合はそのまま使用
    const file = typeof s.file === 'object'
      ? (s.file[currentLang] || s.file.ja || s.file.en || '')
      : s.file;

    if (!file) continue;

    const opt = document.createElement('option');
    opt.value = file;
    opt.textContent = name;
    sel.appendChild(opt);
  }
}

async function loadSampleFile(fileUrl) {
  if (!fileUrl) return;
  if (items.length > 0 && !confirm(t('confirm.loadSample'))) {
    document.getElementById('sampleSelect').value = '';
    return;
  }
  try {
    const res = await fetch(fileUrl);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const text = await res.text();
    items = csvToItems(text);
    undoStack = [];
    const name = fileUrl.split('/').pop() || 'sample.csv';
    setFileName(name);
    document.getElementById('undoBtn').disabled = true;
    document.getElementById('sampleSelect').value = '';
    clearLocalStorage();
    collapseMetaRootIfExists();
    applyRecommendedCtrlIfExists();
    render();
  } catch(e) {
    alert('サンプルの読み込みに失敗しました: ' + e.message);
    document.getElementById('sampleSelect').value = '';
  }
}

async function loadTutorialIfEmpty() {
  // Load language-appropriate tutorial when there is no saved data
  const tutorialEntry = samplesIndex.find(s => s.id === 'tutorial');
  if (!tutorialEntry) return;
  try {
    const res = await fetch(tutorialEntry.file);
    if (!res.ok) return;
    const text = await res.text();
    items = csvToItems(text);
    setFileName('new_mapping.csv');
    render();
  } catch(e) {
    console.warn('Tutorial load failed:', e);
  }
}

// ═══════════════════════════════════════════════════════════════════════════
// GAMEPAD MODAL
// ═══════════════════════════════════════════════════════════════════════════

function updateGamepadItemName() {
  const el = document.getElementById("gamepadItemName");
  const mapEl = document.getElementById("gamepadCurrentMapping");
  const item = items.find(it=>it.id===gamepadTargetId);
  el.textContent = item ? (item.name || t("gp.nameEmpty")) : "";
  if (item && item.mapping) {
    mapEl.innerHTML = mappingDisplayHTML(item.mapping);
  } else {
    mapEl.innerHTML = `<span class="empty-mapping-hint">${t("gp.none")}</span>`;
  }
}
function gamepadSkipNext() {
  if (gamepadTargetId !== null) {
    const next = getNextMappingItem(gamepadTargetId);
    if (next) { gamepadTargetId = next; gamepadPressedButtons = []; gamepadIsIdle = true; gamepadPrevPressed = new Set(); updateGamepadItemName(); renderGamepadDisplay(); return; }
  }
  closeGamepadModal();
}
function gamepadModalKeyHandler(e) {
  if (e.key === "Escape") { e.preventDefault(); gamepadCancel(); }
  else if (e.key === "Enter") { e.preventDefault(); gamepadApply(); }
  else if (e.key === " ") { e.preventDefault(); gamepadApplyNext(); }
  else if (e.key === "Tab") { e.preventDefault(); gamepadSkipNext(); }
}
function renderGamepadButtonGrid() {
  const el = document.getElementById("gamepadButtonGrid");
  if (!el) return;

  const ctrlMap = CONTROLLER_BUTTON_MAP[currentController] || {};

  function ctrlLabel(canonical) {
    return ctrlMap[canonical] ?? canonical;
  }

  function gpBtn(value, display) {
    const d = esc(display ?? value);
    const safeVal = value.replace(/\\/g, '\\\\').replace(/'/g, "\\'");
    return `<button class="gamepad-btn" `
         + `style="min-width:30px;height:26px;font-size:10px;font-weight:700;padding:0 5px" `
         + `onclick="gamepadAddButton('${safeVal}')" title="${esc(value)}">${d}</button>`;
  }

  function grpRow(label, btnsHtml) {
    return `<div class="gp-btn-group-row">`
         + `<div class="gp-group-label">${esc(label)}</div>`
         + `<div class="gp-btn-group-buttons">${btnsHtml}</div>`
         + `</div>`;
  }

  const sep = '<span class="gp-btn-sep"></span>';

  const html = [
    grpRow(t('gp.group.face'),
      ['A','B','X','Y'].map(c => gpBtn(ctrlLabel(c))).join('')
    ),
    grpRow(t('gp.group.shoulder'),
      ['LB','RB','LT','RT'].map(c => gpBtn(ctrlLabel(c))).join('')
    ),
    grpRow(t('gp.group.system'),
      gpBtn('LS') + gpBtn('RS') + sep + gpBtn(ctrlLabel('Back')) + gpBtn(ctrlLabel('Start'))
    ),
    grpRow(t('gp.group.dpad'),
      gpBtn('▲') + gpBtn('▼') + gpBtn('◀') + gpBtn('▶')
    ),
    grpRow('LS',
      gpBtn('LS:Left','LS←') + gpBtn('LS:Right','LS→') + gpBtn('LS:Up','LS↑') + gpBtn('LS:Down','LS↓')
      + sep
      + gpBtn('LS:X','LS:X') + gpBtn('LS:Y','LS:Y') + gpBtn('LS:XY','LS:XY')
    ),
    grpRow('RS',
      gpBtn('RS:Left','RS←') + gpBtn('RS:Right','RS→') + gpBtn('RS:Up','RS↑') + gpBtn('RS:Down','RS↓')
      + sep
      + gpBtn('RS:X','RS:X') + gpBtn('RS:Y','RS:Y') + gpBtn('RS:XY','RS:XY')
    ),
  ].join('');

  el.innerHTML = html;
}

function gamepadClear() {
  gamepadPressedButtons = [];
  gamepadIsIdle = true;
  gamepadPrevPressed = new Set();
  renderGamepadDisplay();
}

function openGamepadModal(id) {
  gamepadTargetId = id;
  gamepadPressedButtons = [];
  gamepadIsIdle = true;
  gamepadPrevPressed = new Set();
  document.getElementById("gamepadModal").classList.add("show");
  document.addEventListener("keydown", gamepadModalKeyHandler);
  updateGamepadItemName();
  renderGamepadDisplay();
  renderGamepadButtonGrid();
  pollGamepad();
}
function closeGamepadModal() {
  cancelAnimationFrame(gamepadRAF);
  document.getElementById("gamepadModal").classList.remove("show");
  document.removeEventListener("keydown", gamepadModalKeyHandler);
  gamepadTargetId = null;
}
function gamepadCancel() {
  closeGamepadModal();
}
function gamepadApply() {
  if (gamepadTargetId !== null) updateItem(gamepadTargetId, "mapping", toMappingString(gamepadPressedButtons));
  closeGamepadModal();
}
function gamepadApplyNext() {
  if (gamepadTargetId !== null) {
    updateItem(gamepadTargetId, "mapping", toMappingString(gamepadPressedButtons));
    const next = getNextMappingItem(gamepadTargetId);
    if (next) { gamepadTargetId = next; gamepadPressedButtons = []; gamepadIsIdle = true; gamepadPrevPressed = new Set(); updateGamepadItemName(); renderGamepadDisplay(); return; }
  }
  closeGamepadModal();
}

function gamepadAddButton(btn) {
  if (!gamepadPressedButtons.includes(btn)) {
    gamepadPressedButtons.push(btn);
    renderGamepadDisplay();
  }
}

function renderGamepadDisplay() {
  const el = document.getElementById("gamepadDisplay");
  if (gamepadPressedButtons.length === 0) {
    el.innerHTML = `<span class="empty-state-text">${t("gp.noInput")}</span>`;
  } else {
    el.innerHTML = gamepadPressedButtons.map((b,i) =>
      (i > 0 ? '<span class="btn-combo-plus">+</span>' : '') + buttonBadgeHTML(b)
    ).join('');
  }
}

// X軸・Y軸の履歴からスティックトークンを1つに決定する
function mergeStick(prevBtns, currentX, currentY, stickSet, prefix) {
  const prevEntry = prevBtns.find(b => stickSet.has(b));
  const hadX = prevEntry === `${prefix}:X` || prevEntry === `${prefix}:XY`;
  const hadY = prevEntry === `${prefix}:Y` || prevEntry === `${prefix}:XY`;
  const mergedX = currentX || hadX;
  const mergedY = currentY || hadY;
  let result = null;
  if (mergedX && mergedY) result = `${prefix}:XY`;
  else if (mergedX) result = `${prefix}:X`;
  else if (mergedY) result = `${prefix}:Y`;
  const filtered = prevBtns.filter(b => !stickSet.has(b));
  return { filtered, value: result };
}

function pollGamepad() {
  const gps = navigator.getGamepads ? navigator.getGamepads() : [];
  const gp = gps[0]||gps[1]||gps[2]||gps[3];
  if (!gp) { gamepadRAF = requestAnimationFrame(pollGamepad); return; }

  const currentlyPressed = new Set();
  gp.buttons.forEach((btn, idx) => {
    const xboxName = GAMEPAD_BUTTON_MAP[idx];
    if (!btn.pressed || !xboxName) return;
    if (COMMON_BUTTONS.has(xboxName) || !CONTROLLER_BUTTON_MAP[currentController]) {
      currentlyPressed.add(xboxName);
    } else {
      currentlyPressed.add(CONTROLLER_BUTTON_MAP[currentController][xboxName] ?? xboxName);
    }
  });

  let lsX = false, lsY = false;
  if (gp.axes.length >= 2) { lsX = Math.abs(gp.axes[0]) > AXIS_THRESHOLD; lsY = Math.abs(gp.axes[1]) > AXIS_THRESHOLD; }
  let rsX = false, rsY = false;
  if (gp.axes.length >= 4) { rsX = Math.abs(gp.axes[2]) > AXIS_THRESHOLD; rsY = Math.abs(gp.axes[3]) > AXIS_THRESHOLD; }
  const hasLs = lsX || lsY, hasRs = rsX || rsY;
  if (hasLs) currentlyPressed.add("__LS__");
  if (hasRs) currentlyPressed.add("__RS__");

  const wasIdle = gamepadPrevPressed.size === 0;
  const nowHasInput = currentlyPressed.size > 0;

  if (wasIdle && nowHasInput) {
    let fresh = [...currentlyPressed].filter(b=>b!=="__LS__"&&b!=="__RS__");
    if (hasLs) { if(lsX&&lsY) fresh.push("LS:XY"); else if(lsX) fresh.push("LS:X"); else fresh.push("LS:Y"); }
    if (hasRs) { if(rsX&&rsY) fresh.push("RS:XY"); else if(rsX) fresh.push("RS:X"); else fresh.push("RS:Y"); }
    gamepadPressedButtons = fresh;
    gamepadIsIdle = false;
    renderGamepadDisplay();
  } else if (nowHasInput) {
    let newBtns = [...gamepadPressedButtons];
    if (hasLs) { const m = mergeStick(newBtns, lsX, lsY, LS_INPUTS, "LS"); newBtns = m.filtered; if(m.value) newBtns.push(m.value); }
    if (hasRs) { const m = mergeStick(newBtns, rsX, rsY, RS_INPUTS, "RS"); newBtns = m.filtered; if(m.value) newBtns.push(m.value); }
    for (const btn of currentlyPressed) { if(btn==="__LS__"||btn==="__RS__") continue; if(!newBtns.includes(btn)) newBtns.push(btn); }
    if (newBtns.length !== gamepadPressedButtons.length || newBtns.some((b,i)=>b!==gamepadPressedButtons[i])) {
      gamepadPressedButtons = newBtns;
      renderGamepadDisplay();
    }
  }

  if (currentlyPressed.size === 0 && gamepadPrevPressed.size > 0) gamepadIsIdle = true;
  gamepadPrevPressed = currentlyPressed;
  gamepadRAF = requestAnimationFrame(pollGamepad);
}

// ═══════════════════════════════════════════════════════════════════════════
// KEYBOARD INPUT MODAL
// ═══════════════════════════════════════════════════════════════════════════

let kbTargetId = null;
let kbCapturedKeys = []; // array of key display names

function kbAddKey(key) {
  kbCapturedKeys.push(key);
  renderKbDisplay();
}

function kbRemoveLast() {
  if (kbCapturedKeys.length > 0) {
    kbCapturedKeys.pop();
    renderKbDisplay();
  }
}

function renderKbDisplay() {
  const el = document.getElementById("kbDisplay");
  if (kbCapturedKeys.length === 0) {
    el.innerHTML = `<span class="empty-state-text">${t("kb.noInput")}</span>`;
  } else {
    el.innerHTML = kbCapturedKeys.map(k => keyBadgeHTML(k)).join('');
  }
}

function toKbMappingString(keys) {
  return keys.map(k => `{${k}}`).join('');
}

function updateKbItemInfo() {
  const el = document.getElementById("kbItemName");
  const mapEl = document.getElementById("kbCurrentMapping");
  const item = items.find(it => it.id === kbTargetId);
  el.textContent = item ? (item.name || t("kb.nameEmpty")) : "";
  if (item && item.mapping) {
    mapEl.innerHTML = mappingDisplayHTML(item.mapping);
  } else {
    mapEl.innerHTML = `<span class="empty-mapping-hint">${t("kb.none")}</span>`;
  }
}

function kbModalKeyHandler(e) {
  if (e.key === "Escape") { e.preventDefault(); kbCancel(); }
  else if (e.key === "Enter") { e.preventDefault(); kbApply(); }
  else if (e.key === " ")    { e.preventDefault(); kbApplyNext(); }
  else if (e.key === "Tab")  { e.preventDefault(); kbSkipNext(); }
}

function switchKbTab(tab) {
  document.getElementById('kb-panel-keys').style.display    = tab === 'keys'    ? 'flex' : 'none';
  document.getElementById('kb-panel-symbols').style.display = tab === 'symbols' ? 'flex' : 'none';
  document.getElementById('kbTabKeys').classList.toggle('active',    tab === 'keys');
  document.getElementById('kbTabSymbols').classList.toggle('active', tab === 'symbols');
}

function openKeyboardModal(id) {
  kbTargetId = id;
  kbCapturedKeys = [];
  switchKbTab('keys');
  document.getElementById("keyboardModal").classList.add("show");
  document.addEventListener("keydown", kbModalKeyHandler);
  updateKbItemInfo();
  renderKbDisplay();
}

function closeKeyboardModal() {
  document.getElementById("keyboardModal").classList.remove("show");
  document.removeEventListener("keydown", kbModalKeyHandler);
  kbTargetId = null;
}

function kbSkipNext() {
  const next = kbTargetId !== null ? getNextMappingItem(kbTargetId) : null;
  if (next) {
    kbTargetId = next;
    kbCapturedKeys = [];
    updateKbItemInfo();
    renderKbDisplay();
  } else {
    closeKeyboardModal();
  }
}

function kbCancel() {
  closeKeyboardModal();
}

function kbClear() {
  kbCapturedKeys = [];
  renderKbDisplay();
}

function kbApply() {
  if (kbTargetId !== null && kbCapturedKeys.length > 0) {
    updateItem(kbTargetId, "mapping", toKbMappingString(kbCapturedKeys));
  }
  closeKeyboardModal();
}

function kbApplyNext() {
  if (kbTargetId !== null && kbCapturedKeys.length > 0) {
    updateItem(kbTargetId, "mapping", toKbMappingString(kbCapturedKeys));
  }
  const next = kbTargetId !== null ? getNextMappingItem(kbTargetId) : null;
  if (next) {
    kbTargetId = next;
    kbCapturedKeys = [];
    updateKbItemInfo();
    renderKbDisplay();
  } else {
    closeKeyboardModal();
  }
}

// ═══════════════════════════════════════════════════════════════════════════
// CHEATSHEET EXPORT
// ═══════════════════════════════════════════════════════════════════════════

const GHPAGES_BASE_URL = "https://crowell7144.github.io/MappingManager";

const PF_CLASSES = {
  A:{cls:"pf-xbox-a",color:"pf-color-green"},B:{cls:"pf-xbox-b",color:"pf-color-red"},
  X:{cls:"pf-xbox-x",color:"pf-color-blue"},Y:{cls:"pf-xbox-y",color:"pf-color-yellow"},
  LB:{cls:"pf-xbox-left-shoulder",color:"pf-color-red-gradient"},RB:{cls:"pf-xbox-right-shoulder",color:"pf-color-green-gradient"},
  LT:{cls:"pf-xbox-left-trigger",color:"pf-color-red-gradient"},RT:{cls:"pf-xbox-right-trigger",color:"pf-color-green-gradient"},
  LS:{cls:"pf-analog-l-click",color:"pf-color-analog-l"},RS:{cls:"pf-analog-r-click",color:"pf-color-analog-r"},
  "LS:X":{cls:"pf-analog-l-left-right",color:"pf-color-analog-l"},"LS:Y":{cls:"pf-analog-l-up-down",color:"pf-color-analog-l"},
  "LS:XY":{cls:"pf-analog-l-any",color:"pf-color-analog-l"},
  "LS:Right":{cls:"pf-analog-l-right",color:"pf-color-analog-l"},"LS:Left":{cls:"pf-analog-l-left",color:"pf-color-analog-l"},
  "LS:Up":{cls:"pf-analog-l-up",color:"pf-color-analog-l"},"LS:Down":{cls:"pf-analog-l-down",color:"pf-color-analog-l"},
  "RS:X":{cls:"pf-analog-r-left-right",color:"pf-color-analog-r"},
  "RS:Y":{cls:"pf-analog-r-up-down",color:"pf-color-analog-r"},"RS:XY":{cls:"pf-analog-r-any",color:"pf-color-analog-r"},
  "RS:Right":{cls:"pf-analog-r-right",color:"pf-color-analog-r"},"RS:Left":{cls:"pf-analog-r-left",color:"pf-color-analog-r"},
  "RS:Up":{cls:"pf-analog-r-up",color:"pf-color-analog-r"},"RS:Down":{cls:"pf-analog-r-down",color:"pf-color-analog-r"},
  Start:{cls:"pf-xbox-menu",color:"pf-color-black"},Back:{cls:"pf-xbox-view",color:"pf-color-black"},
  "▲":{cls:"pf-dpad-up",color:"pf-color-black"},"▼":{cls:"pf-dpad-down",color:"pf-color-black"},
  "▶":{cls:"pf-dpad-right",color:"pf-color-black"},"◀":{cls:"pf-dpad-left",color:"pf-color-black"},
  "▲▶":{cls:"pf-gamepad-up-right",color:"pf-color-black"},"▼▶":{cls:"pf-dpad-right-down",color:"pf-color-black"},
  "◀▼":{cls:"pf-dpad-left-down",color:"pf-color-black"},"◀▲":{cls:"pf-dupad-left-up",color:"pf-color-black"},
  LP1:{cls:"pf-gamepad-l4",color:"pf-color-dark-purple"},LP2:{cls:"pf-gamepad-l5",color:"pf-color-dark-purple"},
  RP1:{cls:"pf-gamepad-r4",color:"pf-color-dark-brown"},RP2:{cls:"pf-gamepad-r5",color:"pf-color-dark-brown"},
  Controller:{cls:"pf-device-x360",color:"pf-color-black"},
  // PlayStation
  '×':{cls:"pf-sony-x",color:"pf-color-blue"},
  '○':{cls:"pf-sony-a",color:"pf-color-red"},
  '□':{cls:"pf-sony-b",color:"pf-color-pink"},
  '△':{cls:"pf-sony-y",color:"pf-color-green"},
  L1:{cls:"pf-sony-left-shoulder",color:"pf-color-red-gradient"},
  R1:{cls:"pf-sony-right-shoulder",color:"pf-color-green-gradient"},
  L2:{cls:"pf-sony-left-trigger",color:"pf-color-red-gradient"},
  R2:{cls:"pf-sony-right-trigger",color:"pf-color-green-gradient"},
  Share:{cls:"pf-sony-share",color:"pf-color-black"},
  Create:{cls:"pf-sony-dualsense-share",color:"pf-color-black"},
  Options:{cls:"pf-sony-options",color:"pf-color-black"},
  // Nintendo Switch
  L:{cls:"pf-nintendo-left-shoulder",color:"pf-color-red-gradient"},
  R:{cls:"pf-nintendo-right-shoulder",color:"pf-color-green-gradient"},
  ZL:{cls:"pf-nintendo-left-trigger",color:"pf-color-red-gradient"},
  ZR:{cls:"pf-nintendo-right-trigger",color:"pf-color-green-gradient"},
  '−':{cls:"pf-nintendo-minus",color:"pf-color-black"},
  '+':{cls:"pf-nintendo-plus",color:"pf-color-black"},
};

// Badge colors for text badge mode (used in both editor and badge-mode export)
// BUTTON_STYLES から背景色・文字色を導出（二重管理を避けるため）
const BADGE_COLORS     = Object.fromEntries(Object.entries(BUTTON_STYLES).map(([k,v]) => [k, v.bg]));
const BADGE_TEXT_COLORS = Object.fromEntries(Object.entries(BUTTON_STYLES).filter(([,v]) => v.text !== "#fff").map(([k,v]) => [k, v.text]));

// Keyboard key PromptFont class mappings
const PF_KEY_CLASSES = {};
// A-Z
for (let i = 0; i < 26; i++) {
  const ch = String.fromCharCode(65 + i);
  PF_KEY_CLASSES[ch] = "pf-keyboard-" + ch.toLowerCase();
  PF_KEY_CLASSES[ch.toLowerCase()] = "pf-keyboard-" + ch.toLowerCase();
}
// 0-9
for (let i = 0; i <= 9; i++) {
  PF_KEY_CLASSES[String(i)] = "pf-keyboard-" + i;
}
// Special keys
Object.assign(PF_KEY_CLASSES, {
  Ctrl:"pf-keyboard-control", Control:"pf-keyboard-control",
  LCtrl:"pf-keyboard-control", RCtrl:"pf-keyboard-control",
  Alt:"pf-keyboard-alt",
  LAlt:"pf-keyboard-alt",   RAlt:"pf-keyboard-alt",
  Shift:"pf-keyboard-shift",
  LShift:"pf-keyboard-shift", RShift:"pf-keyboard-shift",
  Tab:"pf-keyboard-tab", Caps:"pf-keyboard-caps", CapsLock:"pf-keyboard-caps",
  Enter:"pf-keyboard-enter", Return:"pf-keyboard-enter",
  Esc:"pf-keyboard-escape", Escape:"pf-keyboard-escape",
  Space:"pf-keyboard-space", Backspace:"pf-keyboard-backspace",
  Delete:"pf-keyboard-delete", Del:"pf-keyboard-delete",
  Insert:"pf-keyboard-insert", Ins:"pf-keyboard-insert",
  Home:"pf-keyboard-home", End:"pf-keyboard-end",
  PageUp:"pf-keyboard-page-up", PgUp:"pf-keyboard-page-up",
  PageDown:"pf-keyboard-page-down", PgDn:"pf-keyboard-page-down",
  Up:"pf-keyboard-up", Down:"pf-keyboard-down",
  Left:"pf-keyboard-left", Right:"pf-keyboard-right",
  Fn:"pf-keyboard-fn", Super:"pf-keyboard-super", Win:"pf-keyboard-super",
  PrintScreen:"pf-keyboard-print-screen", PrtSc:"pf-keyboard-print-screen",
  ScrollLock:"pf-keyboard-scroll-lock", Pause:"pf-keyboard-pause",
  NumLock:"pf-keyboard-num-lock",
  F1:"pf-keyboard-f1", F2:"pf-keyboard-f2", F3:"pf-keyboard-f3", F4:"pf-keyboard-f4",
  F5:"pf-keyboard-f5", F6:"pf-keyboard-f6", F7:"pf-keyboard-f7", F8:"pf-keyboard-f8",
  F9:"pf-keyboard-f9", F10:"pf-keyboard-f10", F11:"pf-keyboard-f11", F12:"pf-keyboard-f12",
});

function pfMappingHTML(mapping, fs) {
  const tokens = parseMappingTokens(mapping);
  return tokens.map(tok => {
    if (tok.type === 'button') {
      const info = PF_CLASSES[tok.value];
      if (info) return `<span class="pf ${info.cls} ${info.color}"></span>`;
      return `<span class="btn-b" style="background:#555;color:#fff">${esc(tok.value)}</span>`;
    }
    if (tok.type === 'key') {
      const cls = PF_KEY_CLASSES[tok.value];
      if (cls) return `<span class="pf ${cls}" style="color:#333"></span>`;
      return `<span class="btn-b" style="background:#ddd;color:#333;border:1px solid #999">${esc(tok.value)}</span>`;
    }
    return `<span style="font-size:${fs ? fs-2+'pt' : 'inherit'};color:#333">${esc(tok.value)}</span>`;
  }).join("");
}

function badgeMappingHTML(mapping, fs) {
  const tokens = parseMappingTokens(mapping);
  if (tokens.length === 0) return "";
  return tokens.map(tok => {
    if (tok.type === 'button') {
      const bg = BADGE_COLORS[tok.value] || "#555";
      const tc = BADGE_TEXT_COLORS[tok.value] || "#fff";
      const label = BUTTON_STYLES[tok.value]?.label || tok.value;
      return `<span class="btn-b" style="background:${bg};color:${tc}">${esc(label)}</span>`;
    }
    if (tok.type === 'key') {
      return `<span class="btn-b" style="background:#ddd;color:#333;border:1px solid #999">${esc(tok.value)}</span>`;
    }
    return `<span style="font-size:${fs-2}pt;color:#333">${esc(tok.value)}</span>`;
  }).join("");
}

function getExportSettings() {
  const useRec = isUseRecommendedChecked();
  if (useRec && hasMetaSettings()) {
    const meta = readMetaSettings();
    const mode = meta.buttonStyle || 'promptfont';
    return {
      cols:       parseInt(meta.columns)   || 3,
      fs:         parseFloat(meta.fontSize) || 12,
      mode,
      fontSource: document.getElementById("exportFontSource").value,
      theme:      meta.outputStyle || 'mono',
    };
  }
  const mode = document.getElementById("exportRenderMode").value;
  return {
    cols:       parseInt(document.getElementById("exportCols").value),
    fs:         parseFloat(document.getElementById("exportFontSize").value),
    mode,
    fontSource: mode === "promptfont" ? document.getElementById("exportFontSource").value : null,
    theme:      document.getElementById("exportTheme").value,
  };
}

function isUseRecommendedChecked() {
  const cb = document.getElementById("exportUseRecommended");
  return cb ? cb.checked : false;
}

function onUseRecommendedChange() {
  const checked = isUseRecommendedChecked();
  localStorage.setItem('mm_useRecommendedExport', checked ? '1' : '0');
  const controls = ['exportCols','exportFontSize','exportRenderMode','exportTheme'];
  controls.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.disabled = checked;
  });
  updateExportPreview();
}

// ─── Export color helpers ─────────────────────────────────────────────────

function getMonoColors() {
  return {
    sectionBorder: "#bbb",   sectionAccent: "#555",
    headerBg:      "#333",   headerColor:   "#fff",
    zebraRow:      "#f2f2f2", rowBorder:    "#ccc",   nameColor: "#444",
    subCatBg:      "#666",   subCatColor:   "#fff",
    colDivider:    "#ccc",   sepColor:      "#aaa",
  };
}

function getNavyColors() {
  return {
    sectionBorder: "#94a3b8", sectionAccent: "#1e293b",
    headerBg:      "#1e293b", headerColor:   "#f1f5f9",
    zebraRow:      "#f8f9fa", rowBorder:     "#e2e8f0", nameColor: "#475569",
    subCatBg:      "#475569", subCatColor:   "#fff",
    colDivider:    "#e2e8f0", sepColor:      "#cbd5e1",
  };
}

function resolveExportColors(theme) {
  if (theme === 'recommended') {
    const meta = readMetaSettings();
    if (meta) {
      const fallback = getMonoColors();
      const keys = ['headerBg','headerColor','sectionBorder','sectionAccent',
                    'zebraRow','rowBorder','nameColor','subCatBg','subCatColor',
                    'colDivider','sepColor'];
      const result = {};
      for (const k of keys) {
        const v = meta[k];
        result[k] = isColorCode(v) ? v : fallback[k];
      }
      return result;
    }
    return getMonoColors();
  }
  if (theme === 'navy' || theme === 'color') return getNavyColors();
  return getMonoColors();
}

function generateCheatsheetHTML(cols, fs, mode, fontSource, theme = "mono") {
  function e(s) { return String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"); }
  function isEffectivelyExcluded(item) {
    if (item.exclude) return true;
    let cur = item;
    while (cur.parentId) {
      cur = items.find(it => it.id === cur.parentId);
      if (!cur) break;
      if (cur.exclude) return true;
    }
    return false;
  }
  function getChildren(pid) { return items.filter(it=>it.parentId===pid && !isEffectivelyExcluded(it)); }

  const btnFn = mode === "badge" ? (m) => badgeMappingHTML(m, fs) : (m) => pfMappingHTML(m, fs);

  // ── テーマカラー定義 / Theme color definitions
  const T = resolveExportColors(theme);
  const TABLE_OPEN  = `<table><colgroup><col style="width:68%"><col style="width:32%"></colgroup>`;
  const TABLE_CLOSE = `</table>`;

  function renderChildRow(child) {
    if (child.type === "mapping") {
      return `<tr><td>${e(child.name)}</td><td>${btnFn(child.mapping)}</td></tr>`;
    }
    if (child.type === "category") {
      const subChildren = getChildren(child.id);
      let h = child.name.trim() ? `<tr><td colspan="2" style="background:${T.subCatBg};color:${T.subCatColor};font-weight:bold;text-align:center">${e(child.name)}</td></tr>` : "";
      for (const sc of subChildren) {
        if (sc.type === "mapping") h += `<tr><td>${e(sc.name)}</td><td>${btnFn(sc.mapping)}</td></tr>`;
        else if (sc.type === "separator") h += `<tr><td colspan="2" style="padding:0"><div style="border-top:1px solid ${T.sepColor};margin:2px 0"></div></td></tr>`;
      }
      return h;
    }
    if (child.type === "separator") {
      return `<tr><td colspan="2" style="padding:0"><div style="border-top:1px solid ${T.sepColor};margin:2px 0"></div></td></tr>`;
    }
    return "";
  }

  // Build a flat list of page-groups.
  // Each page-group is an array of block html strings.
  function buildPages() {
    const pages = [];
    let curPage = [];

    function pushBlock(html) {
      curPage.push(html);
    }
    function pushPage() {
      if (curPage.length > 0) { pages.push(curPage); curPage = []; }
    }

    const topLevel = items.filter(it => !it.parentId && !isEffectivelyExcluded(it));
    for (const item of topLevel) {
      if (item.type === "category") {
        const children = getChildren(item.id);
        let rowsHtml = "";
        for (const child of children) {
          if (child.type === "pagebreak") {
            if (rowsHtml) {
              const hdr = item.name.trim() ? `<div class="cat-header">${e(item.name)}</div>` : "";
              const cls = item.name.trim() ? "cat-section" : "cat-section-anon";
          pushBlock(`<div class="${cls}">${hdr}${TABLE_OPEN}${rowsHtml}${TABLE_CLOSE}</div>`);
              rowsHtml = "";
            }
            pushPage();
          } else {
            rowsHtml += renderChildRow(child);
          }
        }
        if (rowsHtml) {
          const hdr3 = item.name.trim() ? `<div class="cat-header">${e(item.name)}</div>` : "";
          const cls3 = item.name.trim() ? "cat-section" : "cat-section-anon";
          pushBlock(`<div class="${cls3}">${hdr3}${TABLE_OPEN}${rowsHtml}${TABLE_CLOSE}</div>`);
        } else if (children.length === 0) {
          // 子アイテムのないカテゴリ → タイトルのみのブロックとして出力
          if (item.name.trim()) pushBlock(`<div class="cat-section"><div class="cat-header">${e(item.name)}</div></div>`);
        }
      } else if (item.type === "mapping") {
        pushBlock(`<div class="cat-section">${TABLE_OPEN}<tr><td>${e(item.name)}</td><td>${btnFn(item.mapping)}</td></tr>${TABLE_CLOSE}</div>`);
      } else if (item.type === "separator") {
        pushBlock(`<div class="sep-block"></div>`);
      } else if (item.type === "pagebreak") {
        pushPage();
      }
    }
    pushPage();
    return pages;
  }

  const pages = buildPages();

  // Render each page as a CSS multicolumn container.
  // pagebreak = new container with page-break-after:always.
  const pagesHtml = pages.map((blocks, pi) => {
    const pb = pi < pages.length - 1 ? ` style="page-break-after:always"` : "";
    const inner = blocks.map(b => "    " + b).join("\n");
    return `  <div class="container"${pb}>\n${inner}\n  </div>`;
  }).join("\n");

  // ── CSS & font setup
  let pfLink = "";
  if (mode === "promptfont") {
    const cssUrl = fontSource === "ghpages" ? `${GHPAGES_BASE_URL}/promptfont.css` : "promptfont.css";
    pfLink = `<link rel="stylesheet" href="${cssUrl}">`;
  }

  // ── Badge CSS (used in both modes)
  const badgeCSS = `
  /* ボタン・キーバッジ / Button & key badges */
  .btn-b {
    display: inline-block;
    padding: 0 3px;
    border-radius: 2px;
    font-size: ${Math.max(fs-1,4)}pt;
    font-weight: bold;
    font-family: Arial, sans-serif;
    line-height: ${fs+2}pt;
    margin: 0 0.5px;
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }`;

  // ── PromptFont glyph color classes
  const pfColorCSS = mode === "promptfont" ? `
  /* PromptFont グリフカラー / PromptFont glyph colors */
  .pf { font-size: ${fs}pt; margin: 0 1px; }
  .pf-color-green         { background: linear-gradient(to bottom right, #0F0, #000); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
  .pf-color-red           { background: linear-gradient(to bottom right, #F00, #000); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
  .pf-color-blue          { background: linear-gradient(to bottom right, #33F, #000); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
  .pf-color-yellow        { background: linear-gradient(to bottom right, #FA0, #000); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
  .pf-color-pink          { background: linear-gradient(to bottom right, #e91e63, #000); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
  .pf-color-black         { color: black; }
  .pf-color-red-gradient  { background: linear-gradient(to bottom, #F00, #000); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
  .pf-color-green-gradient{ background: linear-gradient(to bottom, #0F0, #000); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
  .pf-color-analog-l      { background: radial-gradient(#F00, #000, #000); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
  .pf-color-analog-r      { background: radial-gradient(#0F0, #000, #000); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
  .pf-color-dark-purple   { background: linear-gradient(to right, #4B0082, #000); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
  .pf-color-dark-brown    { background: linear-gradient(to right, #5D4037, #000); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }` : "";

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Controller Mapping Cheat Sheet</title>
  ${pfLink}
  <style>
    /* ===== 印刷設定 / Print settings ===== */
    @page {
      size: A4 auto;
      margin: 3mm;
    }

    /* ===== 基本スタイル / Base styles ===== */
    body {
      font-family: メイリオ, 'Segoe UI', Arial, sans-serif;
      font-size: ${fs}pt;
      line-height: 1.2;
      background: #fff;
      color: #1a1a1a;
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
    }

    /* ===== カラムレイアウト / Column layout ===== */
    .container {
      column-count: ${cols};
      column-gap: 4px;
    }

    /* ===== カテゴリセクション / Category section ===== */
    .cat-section {
      background: #fff;
      border: 1px solid ${T.sectionBorder};
      border-left: 3px solid ${T.sectionAccent};
      margin-bottom: 3px;
      break-inside: avoid;
      padding: 0;
      border-radius: 2px;
      overflow: hidden;
    }
    /* 名前が空のカテゴリ: 枠・背景なしで子要素のみ表示 */
    .cat-section-anon {
      margin-bottom: 3px;
      break-inside: avoid;
    }

    /* ===== カテゴリヘッダー / Category header ===== */
    .cat-header {
      font-weight: bold;
      background: ${T.headerBg};
      color: ${T.headerColor};
      padding: 3px 5px;
      text-align: left;
      letter-spacing: 0.02em;
    }

    /* ===== テーブル / Table ===== */
    table {
      width: 100%;
      table-layout: fixed;
      border-collapse: collapse;
    }
    tr:nth-child(even) td {
      background: ${T.zebraRow};
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
    }
    td {
      padding: 1px 2px;
      border-bottom: 1px solid ${T.rowBorder};
      border-left: none;
      border-right: none;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    tr:last-child td { border-bottom: none; }
    /* 左列: アクション名 / Left column: action name */
    td:nth-child(1) {
      font-size: ${fs-1}pt;
      color: ${T.nameColor};
      text-align: right;
      padding-right: 4px;
      border-right: 1px solid ${T.colDivider};
    }
    /* 右列: マッピング / Right column: mapping */
    td:nth-child(2) {
      font-size: ${fs}pt;
      text-align: left;
      padding-left: 3px;
    }

    /* ===== サブカテゴリ行 / Sub-category row ===== */
    tr td[colspan="2"] {
      background: ${T.subCatBg};
      color: ${T.subCatColor};
      font-weight: bold;
      text-align: center;
      padding: 1px 3px;
      font-size: ${fs-1}pt;
    }

    /* ===== セパレーター / Separator ===== */
    tr td[colspan="2"] > div {
      border-top: 1px solid ${T.sepColor};
      margin: 3px 0;
    }
    .sep-block {
      border-top: 1px solid ${T.sepColor};
      margin: 4px 2px;
    }

    ${badgeCSS}
    ${pfColorCSS}
  </style>
</head>
<body>
${pagesHtml}
</body>
</html>`;
}


function showExportModal() {
  const hasDeepNest = items.some(item => {
    if (item.type !== "category") return false;
    const parent = items.find(it => it.id === item.parentId);
    if (!parent || parent.type !== "category") return false;
    const grandParent = items.find(it => it.id === parent.parentId);
    return grandParent && grandParent.type === "category";
  });
  if (hasDeepNest) alert(t("exp.warnDeepNest"));

  // 推奨設定UIの表示制御
  const hasMeta = hasMetaSettings();
  const recRow = document.getElementById("exportRecommendedRow");
  if (recRow) recRow.style.display = hasMeta ? "flex" : "none";

  // 「推奨値を使用」チェックボックスの状態を復元（推奨設定がある場合のみ）
  const cb = document.getElementById("exportUseRecommended");
  if (cb) {
    const saved = localStorage.getItem('mm_useRecommendedExport');
    cb.checked = hasMeta && saved !== '0'; // デフォルトON
    onUseRecommendedChange();
  }

  document.getElementById("exportModal").classList.add("show");
  updateExportPreview();
}

function closeExportModal() { document.getElementById("exportModal").classList.remove("show"); }

// ═══════════════════════════════════════════════════════════════════════════
// META BLOCK — BUILD & SAVE
// ═══════════════════════════════════════════════════════════════════════════

function buildSysItems(rootId, settings) {
  const result = [];
  function mkCat(name, parentId) {
    const it = { id: genId(), parentId, type: 'category', name, mapping: '', exclude: 1 };
    result.push(it);
    return it.id;
  }
  function mkMap(name, mapping, parentId) {
    result.push({ id: genId(), parentId, type: 'mapping', name, mapping: String(mapping ?? ''), exclude: 1 });
  }
  const sysId = mkCat(META_IDS.SYS, rootId);
  mkMap('outputStyle',  settings.theme,      sysId);
  mkMap('controller',   settings.controller, sysId);
  mkMap('columns',      settings.cols,       sysId);
  mkMap('fontSize',     settings.fs,         sysId);
  mkMap('buttonStyle',  settings.mode,       sysId);

  const hdrId = mkCat(META_IDS.SYS_HEADER,  sysId);
  mkMap('headerBg',     settings.colors.headerBg,     hdrId);
  mkMap('headerColor',  settings.colors.headerColor,   hdrId);

  const secId = mkCat(META_IDS.SYS_SECTION, sysId);
  mkMap('sectionBorder', settings.colors.sectionBorder, secId);
  mkMap('sectionAccent', settings.colors.sectionAccent, secId);

  const rowId = mkCat(META_IDS.SYS_ROW,     sysId);
  mkMap('zebraRow',     settings.colors.zebraRow,  rowId);
  mkMap('rowBorder',    settings.colors.rowBorder,  rowId);
  mkMap('nameColor',    settings.colors.nameColor,  rowId);

  const subId = mkCat(META_IDS.SYS_SUBCAT,  sysId);
  mkMap('subCatBg',     settings.colors.subCatBg,   subId);
  mkMap('subCatColor',  settings.colors.subCatColor, subId);

  const miscId = mkCat(META_IDS.SYS_MISC,   sysId);
  mkMap('colDivider',   settings.colors.colDivider, miscId);
  mkMap('sepColor',     settings.colors.sepColor,   miscId);

  return result;
}

function saveRecommendedSettings() {
  // ダイアログの生の設定値を読む（推奨値チェックは無視）
  const mode  = document.getElementById("exportRenderMode").value;
  const theme = document.getElementById("exportTheme").value;
  const cols  = parseInt(document.getElementById("exportCols").value) || 3;
  const fs    = parseFloat(document.getElementById("exportFontSize").value) || 12;
  const colors = resolveExportColors(theme);

  pushUndo();

  // Step 1: 既存 __MM_USER__ サブツリーを先に保存
  let savedUserSubtree = null;
  const existingUser = findMetaItemByName(META_IDS.USER);
  if (existingUser) {
    savedUserSubtree = getSubtree(existingUser.id).map(it => ({...it}));
  }

  // Step 2: 既存 __MM_META__ 配下のSYS/USER以外の子を保存
  const metaRoot = findMetaRoot();
  let otherChildSubtrees = [];
  if (metaRoot) {
    const otherChildren = items.filter(it =>
      it.parentId === metaRoot.id &&
      it.name !== META_IDS.SYS &&
      it.name !== META_IDS.USER
    );
    for (const ch of otherChildren) otherChildSubtrees.push(...getSubtree(ch.id).map(it => ({...it})));
  }

  // Step 3: META ブロック全体を items から除去
  if (metaRoot) {
    const allMetaIds = new Set([metaRoot.id, ...getDescendantIds(metaRoot.id)]);
    items = items.filter(it => !allMetaIds.has(it.id));
  }

  // Step 4: 新しいルートを作成（既存IDを再利用して連続性を保つ）
  const newRoot = metaRoot
    ? { ...metaRoot }
    : { id: genId(), parentId: null, type: 'category', name: META_IDS.ROOT, mapping: '', exclude: 1 };

  // Step 5: SYS アイテムを構築
  const sysItems = buildSysItems(newRoot.id, { cols, fs, mode, theme, controller: currentController, colors });

  // Step 6: USER サブツリー（既存再利用 or 新規作成）
  let userSubtree;
  if (savedUserSubtree) {
    userSubtree = savedUserSubtree;
  } else {
    const userId = genId();
    userSubtree = [
      { id: userId, parentId: newRoot.id, type: 'category', name: META_IDS.USER, mapping: '', exclude: 1 },
      { id: genId(), parentId: userId, type: 'mapping', name: t('meta.userSample'), mapping: '', exclude: 1 },
    ];
  }

  // Step 7: META ブロックを先頭に配置
  const metaBlock = [newRoot, ...sysItems, ...otherChildSubtrees, ...userSubtree];
  items = [...metaBlock, ...items];

  collapsedIds.add(newRoot.id);
  render();
  updateRecommendedCtrlOption();
  updateExportPreview();
}

// ─── Controller recommended option ────────────────────────────────────────

function getRecommendedCtrlLabel(ctrlId) {
  const name = CONTROLLER_NAMES[ctrlId] || ctrlId;
  return `${t('meta.recommendedPrefix')} (${name})`;
}

function updateRecommendedCtrlOption() {
  const sel = document.getElementById('controllerSelect');
  if (!sel) return;
  let opt = sel.querySelector('option[value="__recommended__"]');
  const meta = readMetaSettings();
  const recCtrl = meta ? meta.controller : null;

  if (recCtrl && CONTROLLER_BUTTON_MAP[recCtrl]) {
    if (!opt) {
      opt = document.createElement('option');
      opt.value = '__recommended__';
      sel.insertBefore(opt, sel.firstChild);
    }
    opt.textContent = getRecommendedCtrlLabel(recCtrl);
  } else {
    if (opt) {
      // 推奨設定がなくなった場合: 通常コントローラーに戻す
      if (sel.value === '__recommended__') sel.value = currentController;
      opt.remove();
    }
  }
}

function applyRecommendedCtrlIfExists() {
  const meta = readMetaSettings();
  if (!meta || !meta.controller || !CONTROLLER_BUTTON_MAP[meta.controller]) {
    updateRecommendedCtrlOption();
    return;
  }
  const recCtrl = meta.controller;
  // currentController から recCtrl に変換（meta アイテム自身はテキスト値なので変換されない）
  items = items.map(it => ({
    ...it,
    mapping: convertMappingString(it.mapping, currentController, recCtrl)
  }));
  currentController = recCtrl;
  localStorage.setItem('mappingManagerController', recCtrl);
  const url = new URL(window.location);
  url.searchParams.set('ctrl', recCtrl);
  history.replaceState(null, '', url);
  updateRecommendedCtrlOption();
  const sel = document.getElementById('controllerSelect');
  if (sel) sel.value = '__recommended__';
}

// META ブロック読み込み時に折り畳む
function collapseMetaRootIfExists() {
  const root = findMetaRoot();
  if (root) collapsedIds.add(root.id);
}

function updateExportPreview() {
  const {cols, fs, mode, fontSource, theme} = getExportSettings();
  const html = generateCheatsheetHTML(cols, fs, mode, fontSource, theme);
  document.getElementById("exportPreview").srcdoc = html;
  // Toggle font source row visibility
  document.getElementById("fontSourceRow").style.display = mode === "promptfont" ? "flex" : "none";
  const baseName = fileName.replace(/\.csv$/i,"") || "cheatsheet";
  let hint = `${t("exp.hintFile")} ${baseName}.html`;
  if (mode === "promptfont") {
    if (fontSource === "ghpages") hint += ` ${t("exp.hintGhpages")}`;
    else hint += ` ${t("exp.hintLocal")}`;
  } else {
    hint += ` ${t("exp.hintBadge")}`;
  }
  document.getElementById("exportFilenameHint").textContent = hint;
}

function getExportHTML() {
  const {cols, fs, mode, fontSource, theme} = getExportSettings();
  return generateCheatsheetHTML(cols, fs, mode, fontSource, theme);
}

function downloadHTML() {
  const html = getExportHTML();
  const baseName = fileName.replace(/\.csv$/i,"") || "cheatsheet";
  const blob = new Blob([html], {type:"text/html;charset=utf-8"});
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob); a.download = baseName + ".html"; a.click();
  URL.revokeObjectURL(a.href);
}

function openInNewTab() {
  const html = getExportHTML();
  const w = window.open("", "_blank");
  if (w) { w.document.write(html); w.document.close(); }
}

function printCheatsheet() {
  const html = getExportHTML();
  const w = window.open("", "_blank");
  if (w) {
    w.document.write(html);
    w.document.close();
    // document.write後のonloadは環境によって発火しないためsetTimeoutのみ使用
    setTimeout(() => { try { w.print(); } catch(e) {} }, 300);
  }
}

// ═══════════════════════════════════════════════════════════════════════════
// GAMEPAD STATUS
// ═══════════════════════════════════════════════════════════════════════════

setInterval(() => {
  updateGamepadStatusText();
}, 1000);

// ═══════════════════════════════════════════════════════════════════════════
// KEYBOARD SHORTCUTS
// ═══════════════════════════════════════════════════════════════════════════

document.addEventListener("keydown", e => {
  if (e.ctrlKey && e.key === "z") { e.preventDefault(); undo(); }
  if (e.ctrlKey && e.key === "s") { e.preventDefault(); saveCSV(); }
  // ④ Deleteキーによる削除は廃止（削除は削除ボタンのみ）
});

// ═══════════════════════════════════════════════════════════════════════════
// INIT
// ═══════════════════════════════════════════════════════════════════════════

// ═══════════════════════════════════════════════════════════════════════════
// LOCAL STORAGE AUTO-SAVE
// ═══════════════════════════════════════════════════════════════════════════

const LS_KEY_ITEMS    = 'mappingManagerItems';
const LS_KEY_FILENAME = 'mappingManagerFileName';
const LS_KEY_NEXT_ID  = 'mappingManagerNextId';

function saveToLocalStorage() {
  try {
    localStorage.setItem(LS_KEY_ITEMS,    JSON.stringify(items));
    localStorage.setItem(LS_KEY_FILENAME, fileName);
    localStorage.setItem(LS_KEY_NEXT_ID,  String(nextId));
  } catch(e) {
    console.warn('LocalStorage save failed:', e);
  }
}

function loadFromLocalStorage() {
  try {
    const saved = localStorage.getItem(LS_KEY_ITEMS);
    if (!saved) return false;
    const parsed = JSON.parse(saved);
    if (!Array.isArray(parsed) || parsed.length === 0) return false;
    items    = parsed;
    fileName = localStorage.getItem(LS_KEY_FILENAME) || 'new_mapping.csv';
    nextId   = parseInt(localStorage.getItem(LS_KEY_NEXT_ID) || '1');
    return true;
  } catch(e) {
    console.warn('LocalStorage load failed:', e);
    return false;
  }
}

function clearLocalStorage() {
  localStorage.removeItem(LS_KEY_ITEMS);
  localStorage.removeItem(LS_KEY_FILENAME);
  localStorage.removeItem(LS_KEY_NEXT_ID);
}

// Wrap render() to auto-save after every render
const _origRender = render;
render = function() {
  _origRender();
  saveToLocalStorage();
};

// ── Theme ──────────────────────────────────────────────────────────────────

let currentTheme = 'dark';

function applyTheme(theme) {
  currentTheme = theme;
  document.documentElement.setAttribute('data-theme', theme);
}

function applyThemeAndSave(theme) {
  applyTheme(theme);
  localStorage.setItem('mm_theme', theme);
  updateThemeSegment();
}

// ── Settings Modal ─────────────────────────────────────────────────────────

function openSettingsModal() {
  updateThemeSegment();
  updateLangSegment();
  document.getElementById('settingsModal').classList.add('show');
}

function closeSettingsModal() {
  document.getElementById('settingsModal').classList.remove('show');
}

function handleSettingsOverlayClick(e) {
  if (e.target === document.getElementById('settingsModal')) closeSettingsModal();
}

function updateThemeSegment() {
  const seg = document.getElementById('themeSegment');
  if (!seg) return;
  seg.querySelectorAll('.segment-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.value === currentTheme);
  });
}

function updateLangSegment() {
  const seg = document.getElementById('langSegment');
  if (!seg) return;
  seg.querySelectorAll('.segment-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.value === currentLang);
  });
}

// ── Init ───────────────────────────────────────────────────────────────────

currentLang = detectLang();
document.documentElement.lang = currentLang;
currentController = detectController();

// Theme initialization: LocalStorage → OS prefers-color-scheme
(function() {
  const saved = localStorage.getItem('mm_theme');
  if (saved === 'dark' || saved === 'light') {
    applyTheme(saved);
  } else {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    applyTheme(prefersDark ? 'dark' : 'light');
  }
})();

translatePage();
// Legacy: langBtn removed; segment is updated via openSettingsModal
document.getElementById('controllerSelect').value = currentController;

// Restore saved data or load tutorial
(async () => {
  await loadSamplesIndex();
  if (items.length === 0) {
    const restored = loadFromLocalStorage();
    if (restored) {
      document.getElementById('filenameDisplay').textContent = fileName;
      render();
    } else {
      await loadTutorialIfEmpty();
      // loadTutorialIfEmpty calls render() internally if successful
      if (items.length === 0) render();
    }
  } else {
    render();
  }
})();
