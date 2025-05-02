import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, Observable, of } from 'rxjs';
import { IAlbum } from './album';
import { OAuthService } from 'angular-oauth2-oidc';
import { BaseService } from '../shared/base-service';

@Injectable({
    providedIn: 'root'
})
export class AlbumService extends BaseService {
    constructor(
        httpClient: HttpClient,
        oAuthService: OAuthService
    ) {
        super(httpClient, oAuthService);
    }

    getAlbums(): Observable<IAlbum> {
        return this.getWithAuth<any>('album')
            .pipe(map((result) => result.albums));
    }
}