import { HttpClient, HttpHeaders } from "@angular/common/http";
import { OAuthService } from "angular-oauth2-oidc";
import { Observable } from "rxjs";

export class HttpService {
    private apiUrl = 'http://localhost:6001/api/';

    constructor(
        protected httpClient: HttpClient,
        private oAuthService: OAuthService
    ) {
    }
    protected getByIdWithAuth<T>(url: string, id: string): Observable<T> {
        const headers = this.getHeaders();
        return this.httpClient.get<T>(`${this.apiUrl}${url}/${id}`, { headers });
    }

    protected getWithAuth<T>(url: string): Observable<T> {
        const headers = this.getHeaders();
        return this.httpClient.get<T>(`${this.apiUrl}${url}`, { headers });
    }

    protected postWithAuth<T>(url: string, entity: T): Observable<T> {
        const headers = this.getHeaders();
        return this.httpClient.post<T>(`${this.apiUrl}${url}`, entity, { headers });
    }

    protected patchWithAuth<T>(url: string, id: string, entity: T): Observable<T> {
        const headers = this.getHeaders();
        return this.httpClient.patch<T>(`${this.apiUrl}${url}/${id}`, entity, { headers });
    }

    protected deleteWithAuth<T>(url: string, id: string): Observable<T> {
        const headers = this.getHeaders();
        return this.httpClient.delete<T>(`${this.apiUrl}${url}/${id}`, { headers });
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