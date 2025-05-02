import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { map, Observable, of } from 'rxjs';
import { IGebruiker } from './gebruiker';
import { OAuthService } from 'angular-oauth2-oidc';
import { BaseService } from '../shared/base-service';

@Injectable({
    providedIn: 'root'
})
export class GebruikerService extends BaseService {
    constructor(
        httpClient: HttpClient,
        oauthService: OAuthService
    ) {
        super(httpClient, oauthService);
    }

    getGebruiker(): Observable<IGebruiker> {
        return this.getWithAuth<any>('gebruiker/current')
            .pipe(map((result) => result.gebruiker));
    }

    createGebruiker(gebruiker: IGebruiker): Observable<IGebruiker> {
        return this.postWithAuth<any>('gebruiker', gebruiker)
            .pipe(map((result) => result.gebruiker));
    }
}