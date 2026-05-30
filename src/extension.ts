import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	const disposable = vscode.commands.registerCommand('refcopy.copy', () => {
		const editor = vscode.window.activeTextEditor;
		if (!editor) {
			return;
		}

		const path = vscode.workspace.asRelativePath(editor.document.uri, true);
		const start = editor.selection.start.line + 1;
		const end = editor.selection.end.line + 1;
		const range = start === end ? `${start}` : `${start}-${end}`;

		vscode.env.clipboard.writeText(`@${path} (${range})`);
	});

	context.subscriptions.push(disposable);
}

export function deactivate() {}
