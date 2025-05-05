import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IGebruiker } from './components/shared/gebruiker/gebruiker';
import { GebruikerService } from './components/shared/gebruiker/gebruiker.service';
import { AuthService } from './auth.service';

@Injectable({
    providedIn: 'root'
})
export class GebruikerProvider {
    private gebruikerSubject = new BehaviorSubject<IGebruiker | null>(null);
    gebruiker = this.gebruikerSubject.asObservable();

    constructor(
        private gebruikerService: GebruikerService,
        private authService: AuthService
    ) {
        this.authService.tokenReceived.subscribe(() => {
            this.fetchGebruiker();
        });
    }

    fetchGebruiker(): void {
        if (!this.authService.hasValidIdToken()) {
            this.authService.loginOauth();
            return;
        }

        this.gebruikerService.getCurrentGebruiker().subscribe(gebruiker => {
            var claims = this.authService.getIdentityClaims();
            gebruiker.imageUrl = claims?.['picture'];
            this.gebruikerSubject.next(gebruiker);
        });
    }

}