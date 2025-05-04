import { Component, OnInit } from '@angular/core';
import { materialImports } from '../../../../material.imports';
import { HeaderToolbarComponent } from '../../../shared/toolbar/toolbar.component';
import { AlbumService } from '../../../album/album.service';
import { IAlbum } from '../../../album/album';
import { MatDialog } from '@angular/material/dialog';
import { UpsertAlbumDialog } from './upsert/upsert.component';

@Component({
    selector: 'albums-component',
    imports: [...materialImports, HeaderToolbarComponent],
    templateUrl: './albums.component.html',
    styleUrl: './albums.component.scss'
})
export class AlbumsComponent implements OnInit {
    albums: IAlbum[];

    constructor(
        private service: AlbumService,
        private dialog: MatDialog,
    ) { }

    ngOnInit(): void {
        this.getAlbums();
    }

    getAlbums(): void {
        this.service.getAlbums().subscribe(albums => this.albums = albums);
    }

    openAddAlbumDialog(): void {
        this.dialog.open(UpsertAlbumDialog, {
            width: '400px',
            data: { actie: 'toevoegen' }
        }).componentInstance.saved.subscribe(_ => {
            this.getAlbums();
        });
    }
}