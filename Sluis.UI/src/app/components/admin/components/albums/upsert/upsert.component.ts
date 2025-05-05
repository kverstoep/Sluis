import { Component, EventEmitter, Inject, Output } from "@angular/core";
import { materialFormImports, materialGenericImports } from "../../../../../material.imports";
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, Validators } from "@angular/forms";
import { IAlbum } from "../../../../shared/albums/models/album";
import { AlbumService } from "../../../../shared/albums/services/album.service";

@Component({
    selector: 'upsert-album-dialog',
    templateUrl: 'upsert.component.html',
    styleUrl: './upsert.component.scss',
    imports: [...materialGenericImports, ...materialFormImports, MatDialogModule]
})
export class UpsertAlbumDialog {
    @Output() saved = new EventEmitter<void>();
    actie: string;
    album: IAlbum;
    form;

    constructor(
        private service: AlbumService,
        private dialogRef: MatDialogRef<UpsertAlbumDialog>,
        @Inject(MAT_DIALOG_DATA) private data: any
    ) {
        this.album = this.data?.album;
        this.actie = this.data?.actie;
        this.form = new FormBuilder().group({
            name: [this.album?.name ?? '', { validators: [Validators.required] }],
        });
    }

    save(): void {
        if (!this.form.valid) {
            this.form.markAllAsTouched();
            return;
        }

        const album = this.createAlbum();
        this.saveAlbum(album)
    }

    close(): void {
        this.dialogRef.close();
    }

    private createAlbum(): IAlbum {
        const album: IAlbum = {
            id: this.album?.id,
            name: this.form.value.name
        }

        return album;
    }

    private saveAlbum(album: IAlbum): void {
        if (!album.id) {
            this.service.create(album).subscribe(_ => {
                this.dialogRef.close();
                this.saved.emit();
            });
        } else {
            this.service.update(album).subscribe(_ => {
                this.dialogRef.close();
                this.saved.emit();
            });
        }
    }
}