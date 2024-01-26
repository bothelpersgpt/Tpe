// extension.ts

import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    let redirectDisposable = vscode.commands.registerCommand('extension.redirectCommand', () => {
        // Get the active text editor
        const editor = vscode.window.activeTextEditor;

        if (editor) {
            // Check if the active file is an HTML file
            if (editor.document.languageId === 'html') {
                // Display a message
                vscode.window.showInformationMessage('Redirecting to another file...');

                // Define the file path to redirect to
                const redirectToFilePath = 'path/to/another/file.html';

                // Open the file
                vscode.workspace.openTextDocument(redirectToFilePath).then((doc) => {
                    vscode.window.showTextDocument(doc);
                }, (error) => {
                    vscode.window.showErrorMessage(`Error opening file: ${error}`);
                });
            } else {
                // If it's not an HTML file, show a warning
                vscode.window.showWarningMessage('This command is only applicable to HTML files.');
            }
        } else {
            vscode.window.showErrorMessage('No active text editor found.');
        }
    });

    context.subscriptions.push(redirectDisposable);
}

export function deactivate() {
    // Deactivation logic, if needed
}
