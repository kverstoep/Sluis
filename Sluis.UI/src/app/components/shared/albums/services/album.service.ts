import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { IAlbum, IAlbumWithFotos } from '../models/album';
import { OAuthService } from 'angular-oauth2-oidc';
import { HttpService } from '../../http-service';

@Injectable({
    providedIn: 'root'
})
export class AlbumService extends HttpService {
    constructor(
        httpClient: HttpClient,
        oAuthService: OAuthService
    ) {
        super(httpClient, oAuthService);
    }

    get(id: string): Observable<IAlbumWithFotos> {
        return this.getByIdWithAuth<any>('album', id)
            .pipe(map((result) => result.album));
    }

    getAlbums(): Observable<IAlbum[]> {
        return this.getWithAuth<any>('album')
            .pipe(map((result) => result.albums));
    }

    create(album: IAlbum): Observable<void> {
        return this.postWithAuth<any>('album', album);
    }

    update(album: IAlbum): Observable<void> {
        return this.patchWithAuth<any>('album', album.id, album);
    }

    delete(album: IAlbum): Observable<void> {
        return this.deleteWithAuth<any>('album', album.id);
    }
}