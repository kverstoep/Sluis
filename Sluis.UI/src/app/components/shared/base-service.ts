import { HttpClient, HttpHeaders } from "@angular/common/http";
import { OAuthService } from "angular-oauth2-oidc";
import { Observable, of } from "rxjs";

export class BaseService {
    constructor(
        private httpClient: HttpClient,
        private oAuthService: OAuthService
    ) {
    }

    getWithAuth<T>(url: string): Observable<T> {
        const token = this.oAuthService.getIdToken();
        if (token) {
            const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
            return this.httpClient.get<T>(url, { headers });
        } else {
            console.error('Token is missing');
            return of(null);
        }
    }
}