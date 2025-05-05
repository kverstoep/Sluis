import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AdminComponent } from './components/admin/admin.component';
import { GebruikerProvider } from './components/admin/gebruiker-provider';
import { inject } from '@angular/core';
import { AlbumsComponent } from './components/shared/albums/albums.component';
import { AlbumDetailsComponent } from './components/shared/albums/album-details/album-details.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    {
        path: 'admin',
        component: AdminComponent,
        providers: [GebruikerProvider],
        resolve: { user: () => inject(GebruikerProvider).fetchGebruiker() },
        loadChildren: () => import('./components/admin/admin.routes').then(x => x.adminRoutes)
    },
    { path: 'fotos', component: AlbumsComponent, data: { adminMode: false }, },
    { path: 'fotos/:id', component: AlbumDetailsComponent, data: { adminMode: false }, },
    {
        path: '404',
        component: PageNotFoundComponent
    },
    {
        path: '**',
        redirectTo: '/404'
    }
];
