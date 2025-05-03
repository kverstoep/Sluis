import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { map, Observable, of } from 'rxjs';
import { IGebruiker } from './gebruiker';
import { OAuthService } from 'angular-oauth2-oidc';
import { HttpService } from '../shared/http-service';

@Injectable({
    providedIn: 'root'
})
export class GebruikerService extends HttpService {
    constructor(
        httpClient: HttpClient,
        oauthService: OAuthService
    ) {
        super(httpClient, oauthService);
    }

    getCurrentGebruiker(): Observable<IGebruiker> {
        return this.getWithAuth<any>('gebruiker/current')
            .pipe(map((result) => result.gebruiker));
    }

    getGebruikers(): Observable<IGebruiker[]> {
        return this.getWithAuth<any>('gebruiker')
            .pipe(map((result) => result.gebruikers));
    }

    createGebruiker(gebruiker: IGebruiker): Observable<void> {
        return this.postWithAuth<any>('gebruiker', gebruiker);
    }

    updateGebruiker(gebruiker: IGebruiker): Observable<void> {
        return this.patchWithAuth<any>('gebruiker', gebruiker.id, gebruiker);
    }

    deleteGebruiker(gebruiker: IGebruiker): Observable<void> {
        return this.deleteWithAuth<any>('gebruiker', gebruiker.id);
    }
}