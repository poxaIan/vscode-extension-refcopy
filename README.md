# RefCopy

Extensão VS Code/Cursor que copia referências de arquivo no formato usado em chats de IA.

## Instalação

### VS Code

1. **Extensions** (`Ctrl+Shift+X`)
2. Busque **RefCopy** ou `@id:poxa-ian.refcopy`
3. **Install**

```bash
code --install-extension poxa-ian.refcopy
```

[Marketplace](https://marketplace.visualstudio.com/items?itemName=poxa-ian.refcopy)

### Cursor

A extensão pode não aparecer na busca. Baixe o `.vsix` na [última release](https://github.com/poxaIan/vscode-extension-refcopy/releases) e instale:

```bash
cursor --install-extension refcopy-0.0.2.vsix
```

Ou **Extensions** → **⋯** → **Install from VSIX...**

## Uso

1. Abra um arquivo no editor
2. Selecione linhas ou posicione o cursor
3. `Ctrl+Shift+P` → **RefCopy: Copy reference** (ou `Ctrl+Shift+C`)
4. Cole no chat de IA (`Ctrl+V`)

## Formato copiado

- Uma linha: `@caminho/relativo/arquivo.ts (42)`
- Várias linhas: `@caminho/relativo/arquivo.ts (15-21)`

Caminho relativo ao workspace. Linhas 1-based.
