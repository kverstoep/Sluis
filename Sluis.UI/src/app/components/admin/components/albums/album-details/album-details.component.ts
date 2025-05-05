import { Component } from '@angular/core';
import { materialFormImports, materialGenericImports } from '../../../../../material.imports';
import { HeaderToolbarComponent } from '../../../../shared/toolbar/toolbar.component';
import { ActivatedRoute } from '@angular/router';
import { AlbumService } from '../../../../album/album.service';
import { FileInputDirective } from '@ngx-dropzone/cdk';
import { MatDropzone } from '@ngx-dropzone/material';
import { MatChipsModule } from '@angular/material/chips';
import { FormControl } from '@angular/forms';
import { FotoService } from '../../../../album/foto.service';
import { IAlbumWithFotos } from '../../../../album/album';
import { IFoto } from '../../../../album/foto';
import { MatDialog } from '@angular/material/dialog';
import { DeleteConfirmDialog } from '../../../../shared/delete-confirm/delete-confirm.component';
import { Location } from '@angular/common';
import { UpsertAlbumDialog } from '../upsert/upsert.component';

@Component({
    selector: 'albums-component',
    imports: [...materialGenericImports, ...materialFormImports, HeaderToolbarComponent, MatDropzone, FileInputDirective, MatChipsModule],
    templateUrl: './album-details.component.html',
    styleUrl: './album-details.component.scss'
})
export class AlbumDetailsComponent {
    filesControl = new FormControl<File[]>([]);

    album: IAlbumWithFotos;

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
        private location: Location
    ) {
        const albumId = this.route.snapshot.paramMap.get('id');
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
            data: { deleteText: `Wilt u de foto verwijderen?`, dialogTitle: 'Foto verwijderen' }
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
            data: { deleteText: `Wilt u dit album en foto's verwijderen?`, dialogTitle: 'Album en foto\'s verwijderen?' }
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