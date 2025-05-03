import { Component, EventEmitter, Inject, Output } from "@angular/core";
import { materialImports } from "../../../../../material.imports";
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { GebruikerService } from "../../../../gebruiker/gebruiker.service";
import { IGebruiker } from "../../../../gebruiker/gebruiker";

@Component({
    selector: 'delete-gebruiker-dialog',
    templateUrl: 'delete.component.html',
    styleUrl: './delete.component.scss',
    imports: [...materialImports, MatDialogModule]
})
export class DeleteGebruikerDialog {
    @Output() saved = new EventEmitter<void>();
    gebruiker: IGebruiker;

    constructor(
        private gebruikerService: GebruikerService,
        private dialogRef: MatDialogRef<DeleteGebruikerDialog>,
        @Inject(MAT_DIALOG_DATA) private data: any
    ) {
        this.gebruiker = this.data.gebruiker;
    }

    delete(): void {
        this.gebruikerService.deleteGebruiker(this.gebruiker).subscribe(_ => {
            this.dialogRef.close();
            this.saved.emit();
        });
    }

    close(): void {
        this.dialogRef.close();
    }

}