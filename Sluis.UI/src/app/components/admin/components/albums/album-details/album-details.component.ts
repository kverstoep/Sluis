import { Component, OnInit } from '@angular/core';
import { materialImports } from '../../../../../material.imports';
import { HeaderToolbarComponent } from '../../../../shared/toolbar/toolbar.component';
import { ActivatedRoute } from '@angular/router';
import { AlbumService } from '../../../../album/album.service';
import { IAlbum } from '../../../../album/album';

@Component({
    selector: 'albums-component',
    imports: [...materialImports, HeaderToolbarComponent],
    templateUrl: './album-details.component.html',
    styleUrl: './album-details.component.scss'
})
export class AlbumDetailsComponent {
    album: IAlbum;

    constructor(private route: ActivatedRoute, private service: AlbumService) {
        var albumId = this.route.snapshot.paramMap.get('id');
        debugger;

        this.service.get(albumId).subscribe(album => {
            this.album = album;
        });
    }

}