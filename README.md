# RefCopy

Extensão VS Code/Cursor que copia referências de arquivo no formato usado em chats de IA.

## Uso

1. Abra um arquivo no editor.
2. Selecione linhas ou posicione o cursor em uma linha.
3. Execute **RefCopy: Copy reference** (`Ctrl+Shift+P`) ou use **Ctrl+Shift+C** com o editor focado.
4. Cole no chat de IA ou no terminal.

## Formato copiado

- Uma linha: `@caminho/relativo/arquivo.ts (42)`
- Várias linhas: `@caminho/relativo/arquivo.ts (15-21)`

O caminho é relativo à raiz do workspace. As linhas são 1-based.
