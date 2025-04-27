import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { IAlbum } from './album';
import { OAuthService } from 'angular-oauth2-oidc';
import { BaseService } from '../shared/base-service';

@Injectable({
    providedIn: 'root'
})
export class AlbumService extends BaseService {
    private apiUrl = 'http://localhost:6001/api';

    constructor(
        httpClient: HttpClient,
        oAuthService: OAuthService
    ) {
        super(httpClient, oAuthService);
    }

    getAlbums(): Observable<any> {
        return this.getWithAuth<IAlbum>(`${this.apiUrl}/album`)
    }
}