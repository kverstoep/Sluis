import { Component } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";
import { MatChipsModule } from "@angular/material/chips";
import { MatDialog } from "@angular/material/dialog";
import { ActivatedRoute } from "@angular/router";
import { FileInputDirective } from "@ngx-dropzone/cdk";
import { MatDropzone } from "@ngx-dropzone/material";
import { materialGenericImports, materialFormImports } from "../../../../material.imports";
import { UpsertAlbumDialog } from "../../../admin/components/albums/upsert/upsert.component";
import { DeleteConfirmDialog } from "../../delete-confirm/delete-confirm.component";
import { HeaderToolbarComponent } from "../../toolbar/toolbar.component";
import { IAlbumWithFotos } from "../models/album";
import { IFoto } from "../models/foto";
import { AlbumService } from "../services/album.service";
import { FotoService } from "../services/foto.service";
import { Location } from '@angular/common';


@Component({
    selector: 'albums-component',
    imports: [...materialGenericImports, ...materialFormImports, HeaderToolbarComponent, MatDropzone, FileInputDirective, MatChipsModule],
    templateUrl: './album-details.component.html',
    styleUrl: './album-details.component.scss'
})
export class AlbumDetailsComponent {
    filesControl = new FormControl<File[]>([], [Validators.required]);

    album: IAlbumWithFotos;
    adminMode = false;

    get files(): File[] {
        const files = this.filesControl.value;
        if (!files) {
            return [];
        }

        return Array.isArray(files) ? files : [files];
    }

    constructor(
        private route: ActivatedRoute,
        private albumService: AlbumService,
        private fotoService: FotoService,
        private dialog: MatDialog,
        private location: Location,
    ) {
        const albumId = this.route.snapshot.paramMap.get('id');
        this.adminMode = this.route.snapshot.data['adminMode'];
        this.getAlbum(albumId);
    }

    removeUpload(file: File): void {
        if (Array.isArray(this.filesControl.value)) {
            this.filesControl.setValue(this.filesControl.value.filter((i) => i !== file));
            return;
        }

        this.filesControl.setValue(null);
    }

    save(): void {
        this.fotoService.createAllFotos(this.filesControl.value, this.album.id).subscribe(_ => {
            this.getAlbum(this.album.id);
        });
    }

    openFotoDeleteConfirmDialog(foto: IFoto): void {
        const dialogRef = this.dialog.open(DeleteConfirmDialog, {
            data: { deleteText: `Foto verwijderen?`, dialogTitle: 'Foto verwijderen' }
        });

        dialogRef.componentInstance.bevestigd.subscribe(() => {
            this.fotoService.delete(foto).subscribe(() => {
                dialogRef.close();
                this.getAlbum(this.album.id);
            });
        });
    }

    openAlbumDeleteConfirmDialog(): void {
        const dialogRef = this.dialog.open(DeleteConfirmDialog, {
            data: { deleteText: `Album en foto's verwijderen?`, dialogTitle: 'Album en foto\'s verwijderen?' }
        });

        dialogRef.componentInstance.bevestigd.subscribe(() => {
            this.albumService.delete(this.album).subscribe(() => {
                dialogRef.close();
                this.back();
            });
        });
    }

    back(): void {
        this.location.back();
    }

    openEditAlbumDialog(): void {
        this.dialog.open(UpsertAlbumDialog, {
            width: '400px',
            data: { actie: 'wijzig', album: this.album }
        }).componentInstance.saved.subscribe(_ => {
            this.getAlbum(this.album.id);
        });
    }

    private getAlbum(albumId: string): void {
        this.albumService.get(albumId).subscribe(album => {
            this.album = album
        });
    }
}