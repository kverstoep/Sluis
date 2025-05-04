import { Injectable } from "@angular/core";
import { OAuthService } from "angular-oauth2-oidc";
import { authCodeFlowConfig } from "./auth.config";
import { Subject } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private tokenReceivedSubject = new Subject<void>();
    tokenReceived = this.tokenReceivedSubject.asObservable();

    constructor(private oauthService: OAuthService) {
        this.configureOauth();

        this.oauthService.events.subscribe((event) => {
            if (event.type === 'token_received') {
                this.tokenReceivedSubject.next();
            }
        });
    }

    hasValidIdToken(): boolean {
        return this.oauthService.hasValidIdToken();
    }

    loginOauth() {
        this.oauthService.loadDiscoveryDocumentAndTryLogin().then(() => {
            this.oauthService.setupAutomaticSilentRefresh();

            if (!this.oauthService.hasValidIdToken()) {
                this.oauthService.initCodeFlow();
            }
        });
    }

    getIdentityClaims(): Record<string, any> {
        return this.oauthService.getIdentityClaims();
    }

    private configureOauth(): void {
        this.oauthService.configure(authCodeFlowConfig);
        this.oauthService.setStorage(sessionStorage);
        this.oauthService.loadDiscoveryDocumentAndTryLogin();
    }
}