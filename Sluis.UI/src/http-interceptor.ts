import { HttpInterceptorFn } from '@angular/common/http';
import { Inject, inject, Injector } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpErrorResponse } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';
import { AuthService } from './app/components/admin/auth.service';

export const httpInterceptor: HttpInterceptorFn = (req, next) => {
    const snackBar = inject(MatSnackBar);
    const injector = inject(Injector); //lazy injection because of circulair DI

    return next(req).pipe(
        catchError((error: HttpErrorResponse) => {
            if (error.status === 401) {
                snackBar.open('Niet ingelogd.', null, { duration: 3000, panelClass: ['red-snackbar'] });
                const authService = injector.get(AuthService)
                authService.loginOauth();
            } else if (error.status === 403) {
                snackBar.open('Geen rechten.', null, { duration: 3000, panelClass: ['red-snackbar'] });
            } else if (error.status === 404) {
                snackBar.open('Resource not found.', null, { duration: 3000, panelClass: ['red-snackbar'] });
            } else {
                snackBar.open('Er is iets foutgegaan', null, { duration: 3000, panelClass: ['red-snackbar'] });
            }

            return throwError(() => error);
        })
    );
};