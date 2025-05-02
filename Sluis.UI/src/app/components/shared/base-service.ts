import { HttpClient, HttpHeaders } from "@angular/common/http";
import { OAuthService } from "angular-oauth2-oidc";
import { Observable, of } from "rxjs";

export class BaseService {
    private apiUrl = 'http://localhost:6001/api/';

    constructor(
        protected httpClient: HttpClient,
        private oAuthService: OAuthService
    ) {
    }

    getWithAuth<T>(url: string): Observable<T> {
        const headers = this.getHeaders();
        return this.httpClient.get<T>(`${this.apiUrl}${url}`, { headers });
    }

    postWithAuth<T>(url: string, entity: T): Observable<T> {
        const headers = this.getHeaders();
        return this.httpClient.post<T>(`${this.apiUrl}${url}`, entity, { headers });
    }

    private getHeaders(): HttpHeaders {
        const token = this.oAuthService.getIdToken();
        if (!token) {
            console.error('Token is missing');
            return null;
        }

        return new HttpHeaders().set('Authorization', `Bearer ${token}`);
    }
}