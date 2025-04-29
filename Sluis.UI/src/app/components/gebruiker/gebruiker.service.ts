import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { IGebruiker } from './gebruiker';
import { OAuthService } from 'angular-oauth2-oidc';
import { BaseService } from '../shared/base-service';

@Injectable({
    providedIn: 'root'
})
export class GebruikerService extends BaseService {
    private apiUrl = 'http://localhost:6001/api';

    constructor(
        httpClient: HttpClient,
        oauthService: OAuthService
    ) {
        super(httpClient, oauthService);
    }

    getGebruiker(): Observable<any> {
        return this.getWithAuth<IGebruiker>(`${this.apiUrl}/gebruiker/current`)
    }
}