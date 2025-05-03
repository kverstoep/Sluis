import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideOAuthClient } from 'angular-oauth2-oidc';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { httpInterceptor } from './http-interceptor';

bootstrapApplication(AppComponent, {
    providers: [
        provideRouter(routes),
        provideHttpClient(),
        provideOAuthClient(),
        provideHttpClient(withInterceptors([httpInterceptor])),
        MatSnackBarModule
    ]
}).catch((err) => console.error(err));