import { Component, EventEmitter, Inject, Output } from "@angular/core";
import { materialGenericImports } from "../../../../../material.imports";
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from "@angular/material/input";
import { MatCheckboxModule } from '@angular/material/checkbox';
import { GebruikerService } from "../../../../gebruiker/gebruiker.service";
import { IGebruiker, Role } from "../../../../gebruiker/gebruiker";

@Component({
    selector: 'upsert-gebruiker-dialog',
    templateUrl: 'upsert.component.html',
    styleUrl: './upsert.component.scss',
    imports: [...materialGenericImports, MatDialogModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatCheckboxModule]
})
export class UpsertGebruikerDialog {
    @Output() saved = new EventEmitter<void>();
    actie: string;
    gebruiker: IGebruiker;
    gebruikerForm;

    constructor(
        private gebruikerService: GebruikerService,
        private dialogRef: MatDialogRef<UpsertGebruikerDialog>,
        @Inject(MAT_DIALOG_DATA) private data: any
    ) {
        this.gebruiker = this.data?.gebruiker;
        this.actie = this.data?.actie;
        this.gebruikerForm = new FormBuilder().group({
            email: [this.gebruiker?.email ?? '', { validators: [Validators.required, Validators.email] }],
            manageFotos: [this.gebruiker?.roles?.find(role => role == Role.ManageFotos) ?? false],
            manageGebruikers: [this.gebruiker?.roles?.find(role => role == Role.ManageGebruikers) ?? false]
        });
    }

    save(): void {
        if (!this.gebruikerForm.valid) {
            this.gebruikerForm.markAllAsTouched();
            return;
        }

        const gebruiker = this.createGebruiker();
        this.saveGebruiker(gebruiker)
    }

    close(): void {
        this.dialogRef.close();
    }

    private createGebruiker(): IGebruiker {
        const roles: Role[] = [
            this.gebruikerForm.value.manageFotos ? Role.ManageFotos : null,
            this.gebruikerForm.value.manageGebruikers ? Role.ManageGebruikers : null
        ].filter(role => role);

        const gebruiker: IGebruiker = {
            id: this.gebruiker?.id,
            email: this.gebruikerForm.value.email,
            roles: roles
        }

        return gebruiker;
    }

    private saveGebruiker(gebruiker: IGebruiker): void {
        if (!gebruiker.id) {
            this.gebruikerService.createGebruiker(gebruiker).subscribe(_ => {
                this.dialogRef.close();
                this.saved.emit();
            });
        } else {
            this.gebruikerService.updateGebruiker(gebruiker).subscribe(_ => {
                this.dialogRef.close();
                this.saved.emit();
            });
        }
    }
}