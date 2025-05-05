import { Component, EventEmitter, Inject, Output } from "@angular/core";
import { materialGenericImports } from "../../../material.imports";
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
    selector: 'delete-confirm-dialog',
    templateUrl: 'delete-confirm.component.html',
    styleUrl: './delete-confirm.component.scss',
    imports: [...materialGenericImports, MatDialogModule]
})
export class DeleteConfirmDialog {
    @Output() bevestigd = new EventEmitter<void>();
    deleteText: string;
    dialogTitle: string;

    constructor(
        private dialogRef: MatDialogRef<DeleteConfirmDialog>,
        @Inject(MAT_DIALOG_DATA) private data: any
    ) {
        this.deleteText = this.data.deleteText;
        this.dialogTitle = this.data.dialogTitle;
    }

    delete(): void {
        this.bevestigd.emit();
    }

    close(): void {
        this.dialogRef.close();
    }
}