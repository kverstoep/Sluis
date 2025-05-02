import { AfterContentChecked, AfterContentInit, Component, OnInit } from '@angular/core';
import { materialImports } from '../../material.imports';
import { OAuthService } from 'angular-oauth2-oidc';
import { authCodeFlowConfig } from './auth.config';
import { AlbumService } from '../album/album.service';
import { GebruikerService } from '../gebruiker/gebruiker.service';
import { IGebruiker, Role } from '../gebruiker/gebruiker';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
    selector: 'admin-component',
    imports: [...materialImports, MatTabsModule],
    templateUrl: './admin.component.html',
    styleUrl: './admin.component.scss'
})
export class AdminComponent implements OnInit {
    gebruiker: IGebruiker;
    Roles = Role;

    constructor(
        private oauthService: OAuthService,
        private albumService: AlbumService,
        private gebruikersService: GebruikerService
    ) {
        this.configureOauth();
    }

    ngOnInit(): void {
        this.oauthService.events.subscribe((event) => {
            if (event.type === 'token_received') {
                this.gebruikersService.getGebruiker();
            }
        });

        this.loginOauth();
    }

    loginOauth() {
        this.oauthService.loadDiscoveryDocumentAndTryLogin().then(() => {
            if (!this.oauthService.hasValidIdToken()) {
                this.oauthService.initCodeFlow();
            } else {
                this.gebruikersService.getGebruiker().subscribe(gebruiker => {
                    this.gebruiker = gebruiker;
                });
            }
        });
    }

    getAlbums(): void {
        this.albumService.getAlbums().subscribe({
            next: (response) => console.log('Data:', response),
            error: (err) => console.error('Error:', err),
            complete: () => console.log('Request completed')
        });
    }

    createGebruiker(): void {
        const gebruiker: IGebruiker = {
            email: 'test@gmail.com',
            roles: [Role.ManageAlbums, Role.ManageFotos, Role.ManageGebruikers]
        }

        this.gebruikersService.createGebruiker(gebruiker).subscribe({
            next: (response) => console.log('Data:', response),
            error: (err) => console.error('Error:', err),
            complete: () => console.log('Request completed')
        });
    }

    hasRole(role: Role): boolean {
        if (!this.gebruiker) {
            return false;
        }
        return this.gebruiker?.roles.includes(role)
    }

    private configureOauth(): void {
        this.oauthService.configure(authCodeFlowConfig);
        this.oauthService.setStorage(sessionStorage);
        this.oauthService.loadDiscoveryDocumentAndTryLogin();
    }
}
