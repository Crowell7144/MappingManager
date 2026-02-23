Generate keyboard shortcuts as a MappingManager-compatible CSV file.

**Arguments**: `$ARGUMENTS`

## MappingManager CSV Format

```
id,parentId,type,name,mapping,exclude
```

- **category row**: `id,,category,Category Name,,0`
- **mapping row**: `id,parentId,mapping,Action Description,{Keys},0`
- **separator row**: `id,parentId,separator,,,0`

### Keyboard Token Syntax

Use `{KeyName}` tokens for all keys:

| Key | Token |
|-----|-------|
| Ctrl | `{Ctrl}` |
| Shift | `{Shift}` |
| Alt | `{Alt}` |
| Escape | `{Esc}` |
| Enter / Return | `{Enter}` |
| Space | `{Space}` |
| Tab | `{Tab}` |
| Backspace | `{Backspace}` |
| Delete | `{Delete}` |
| Arrow keys | `{Up}` `{Down}` `{Left}` `{Right}` |
| Function keys | `{F1}` … `{F12}` |
| Letters/digits | `{A}` `{B}` … `{Z}`, `{0}`…`{9}` |
| Symbols | `{:}` `{;}` `{/}` `{.}` `{,}` etc. |

Modifier combos are written by concatenating tokens: `{Ctrl}{S}` = Ctrl+S.

Plain text (no braces) can be used for labels like `gg` or `:wq`.

---

## Mode Detection

Parse `$ARGUMENTS` to determine the operating mode:

### Mode A — Config file extraction

**Trigger**: `$ARGUMENTS` contains a file path (starts with `/`, `~`, `./`, or contains a `.` suggesting a filename like `init.vim`, `keybindings.json`).

Examples:
- `/generate-shortcuts ~/.vimrc`
- `/generate-shortcuts ~/.config/nvim/init.lua`
- `/generate-shortcuts ~/.config/Code/User/keybindings.json`

**Steps**:
1. Read the specified file using the Read tool.
2. Extract **all key mappings defined in that file** according to the config format:

   **Vim / Neovim** (`.vimrc`, `init.vim`, `init.lua`):
   - Parse lines with `map`, `nmap`, `imap`, `vmap`, `xmap`, `nnoremap`, `inoremap`, `vnoremap`, `xnoremap`, `cnoremap`, `tnoremap`, and Lua equivalents (`vim.keymap.set`, `vim.api.nvim_set_keymap`).
   - Extract: mode prefix (n/i/v/x/c/t), LHS key combo, RHS command/description.
   - Ignore commented-out lines.
   - Convert vim key notation to MappingManager tokens (see table below).
   - Group rows by mode: "Normal Mode", "Insert Mode", "Visual Mode", "Command Mode", "Terminal Mode".

   **VS Code** (`keybindings.json`):
   - Parse JSON array. Each entry has `key`, `command`, `when` (optional).
   - Use `command` as the action description (strip leading `-` for removal entries — skip those).
   - Group by `when` context or by command prefix (e.g. `editor.*`, `workbench.*`).

   **Other formats**: Apply best-effort parsing based on file extension and content.

3. If a mapping has no meaningful description (RHS is just a motion or symbol), use the RHS as the name and note it is "custom".
4. Use `$ARGUMENTS` (filename without path/extension) as the output filename base.

### Mode B — Built-in shortcut generation

**Trigger**: `$ARGUMENTS` is an application name (e.g. `vim`, `emacs`, `vscode`, `tmux`).

**Steps**:
1. Generate a comprehensive list of the application's **commonly used default shortcuts**.
2. Organize into logical categories (e.g. for vim: "Normal Mode", "Insert Mode", "Visual Mode", "Command Mode", "Window / Tab", "Search & Replace").
3. Prefer breadth over exhaustion: cover the most useful shortcuts rather than every obscure one.

### Mode C — No arguments

Ask the user: "Which application or config file should I generate shortcuts for?"

---

## Vim Key Notation Conversion Table

| Vim notation | MappingManager token |
|---|---|
| `<C-x>` | `{Ctrl}{X}` |
| `<S-x>` | `{Shift}{X}` |
| `<A-x>` / `<M-x>` | `{Alt}{X}` |
| `<Esc>` | `{Esc}` |
| `<CR>` / `<Enter>` | `{Enter}` |
| `<Space>` | `{Space}` |
| `<Tab>` | `{Tab}` |
| `<BS>` | `{Backspace}` |
| `<Del>` | `{Delete}` |
| `<Up>` `<Down>` `<Left>` `<Right>` | `{Up}` `{Down}` `{Left}` `{Right}` |
| `<F1>`…`<F12>` | `{F1}`…`{F12}` |
| `<leader>` | render as plain text `<leader>` |
| Lowercase letter `h` | `{h}` (physical key press, no modifier) |
| Uppercase letter `H` | `{Shift}{H}` (uppercase vim commands mean Shift+key) |
| Two-key sequence `gg` | plain text `gg` (multi-char sequences stay as plain text) |
| Ex command `:wq` | plain text `:wq` |

---

## Output

1. Build a valid CSV. Assign sequential integer IDs starting from 1. Use `parentId` correctly.
2. Set `exclude` to `0` for all rows.
3. Do **not** include any rows other than `category`, `mapping`, and `separator`.
4. Write the CSV to a file named `<base>_shortcuts.csv` in the current working directory.
5. Report the output file path and a brief summary (number of categories and mappings extracted).

---

## Hierarchy Guidelines

**Always use two levels of nesting** (top-level category → subcategory → mapping). Do not put mapping rows directly under a root category.

Example structure for vim:

```
Root category: "Normal Mode"          (parentId = "")
  Subcategory: "Navigation"           (parentId = id of "Normal Mode")
    mapping: "Move left"    {H}       (parentId = id of "Navigation")
    mapping: "Move right"   {L}       ...
  Subcategory: "Editing"
    mapping: "Delete char"  {X}
    mapping: "Yank line"    yy
  Subcategory: "Search"
    mapping: "Search forward"  {/}
Root category: "Insert Mode"
  Subcategory: "Enter / Exit"
    mapping: "Enter insert"  {I}
  Subcategory: "Completion"
    ...
Root category: "Visual Mode"
  Subcategory: "Selection"
  Subcategory: "Operations"
Root category: "Command Mode"
  Subcategory: "File"
  Subcategory: "Quit"
Root category: "Window / Tab / Buffer"
  Subcategory: "Windows"
  Subcategory: "Tabs"
  Subcategory: "Buffers"
```

For config file extraction (Mode A): group first by **mode** (Normal / Insert / Visual / Command / Terminal), then within each mode group by **functional area** (Navigation, Editing, Search, etc.).
