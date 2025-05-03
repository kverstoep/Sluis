import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IGebruiker } from '../gebruiker/gebruiker';
import { GebruikerService } from '../gebruiker/gebruiker.service';
import { OAuthService } from 'angular-oauth2-oidc';
import { authCodeFlowConfig } from './auth.config';

@Injectable({
    providedIn: 'root'
})
export class GebruikerProvider {
    private gebruikerSubject = new BehaviorSubject<IGebruiker | null>(null);
    gebruiker = this.gebruikerSubject.asObservable();

    constructor(
        private oauthService: OAuthService,
        private gebruikerService: GebruikerService
    ) {
        this.configureOauth();

        this.oauthService.events.subscribe((event) => {
            if (event.type === 'token_received') {
                this.fetchGebruiker();
            }
        });

        this.loginOauth();
    }

    fetchGebruiker(): void {
        if (!this.oauthService.hasValidIdToken()) {
            this.loginOauth();
            return;
        }

        this.gebruikerService.getCurrentGebruiker().subscribe(gebruiker => {
            var claims = this.oauthService.getIdentityClaims();
            gebruiker.imageUrl = claims?.['picture'];
            this.gebruikerSubject.next(gebruiker);
        });
    }

    private loginOauth() {
        this.oauthService.loadDiscoveryDocumentAndTryLogin().then(() => {
            this.oauthService.setupAutomaticSilentRefresh();

            if (!this.oauthService.hasValidIdToken()) {
                this.oauthService.initCodeFlow();
            }
        });
    }

    private configureOauth(): void {
        this.oauthService.configure(authCodeFlowConfig);
        this.oauthService.setStorage(sessionStorage);
        this.oauthService.loadDiscoveryDocumentAndTryLogin();
    }
}