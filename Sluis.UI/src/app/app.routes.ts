import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AdminComponent } from './components/admin/admin.component';
import { GebruikerProvider } from './components/admin/gebruiker-provider';
import { inject } from '@angular/core';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    {
        path: 'admin',
        component: AdminComponent,
        providers: [GebruikerProvider],
        resolve: { user: () => inject(GebruikerProvider).fetchGebruiker() },
        loadChildren: () => import('./components/admin/admin.routes').then(x => x.adminRoutes)
    },
    {
        path: '404',
        component: PageNotFoundComponent
    },
    {
        path: '**',
        redirectTo: '/404'
    }
];
