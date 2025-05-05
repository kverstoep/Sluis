import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin, from, map, Observable, switchMap } from 'rxjs';
import { OAuthService } from 'angular-oauth2-oidc';
import { HttpService } from '../shared/http-service';
import { IFoto } from './foto';
import { fileToBase64 } from './file-converter';

@Injectable({
    providedIn: 'root'
})
export class FotoService extends HttpService {
    constructor(
        httpClient: HttpClient,
        oAuthService: OAuthService
    ) {
        super(httpClient, oAuthService);
    }

    get(id: string): Observable<IFoto> {
        return this.getByIdWithAuth<any>('foto', id)
            .pipe(map((result) => result.foto));
    }

    create(fotoFile: File, albumId: string): Observable<void> {
        return from(fileToBase64(fotoFile)).pipe(
            switchMap(base64String => {
                return this.postWithAuth<any>('foto', { albumId: albumId, file: base64String });
            })
        );
    }

    delete(foto: IFoto): Observable<void> {
        return this.deleteWithAuth<any>('foto', foto.id);
    }

    createAllFotos(fotoFiles: File[], albumId: string): Observable<any[]> {
        const uploadObservables = fotoFiles.map(fotoFile => this.create(fotoFile, albumId)); // ✅ Creates an array of requests
        return forkJoin(uploadObservables);
    }
}