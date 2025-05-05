import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { materialGenericImports } from '../../../material.imports';
import { UpsertAlbumDialog } from '../../admin/components/albums/upsert/upsert.component';
import { HeaderToolbarComponent } from '../toolbar/toolbar.component';
import { IAlbum } from './models/album';
import { AlbumService } from './services/album.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'albums-component',
    imports: [...materialGenericImports, HeaderToolbarComponent],
    templateUrl: './albums.component.html',
    styleUrl: './albums.component.scss'
})
export class AlbumsComponent implements OnInit {
    albums: IAlbum[];
    adminMode = false;

    constructor(
        private service: AlbumService,
        private dialog: MatDialog,
        private route: ActivatedRoute
    ) { }

    ngOnInit(): void {
        this.adminMode = this.route.snapshot.data['adminMode'];
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

    getDetailRouterLink(album: IAlbum): string {
        return this.adminMode ? `/admin/albums/${album.id}` : `/fotos/${album.id}`
    }
}