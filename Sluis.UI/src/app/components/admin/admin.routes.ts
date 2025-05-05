import { Routes } from '@angular/router';
import { GebruikersComponent } from './components/gebruikers/gebruikers.component';
import { AccountComponent } from './components/account/account.component';
import { Role } from './components/shared/gebruiker/gebruiker';
import { AuthGuard } from '../../auth-guard';
import { AlbumsComponent } from '../shared/albums/albums.component';
import { AlbumDetailsComponent } from '../shared/albums/album-details/album-details.component';

export const adminRoutes: Routes = [
    { path: '', redirectTo: 'account', pathMatch: 'full' },
    {
        path: 'account',
        component: AccountComponent
    },
    {
        path: 'gebruikers',
        component: GebruikersComponent,
        canActivate: [AuthGuard],
        data: { requiredRole: Role.ManageGebruikers }
    },
    {
        path: 'albums',
        component: AlbumsComponent,
        canActivate: [AuthGuard],
        data: { requiredRole: Role.ManageFotos, adminMode: true },
    },
    {
        path: 'albums/:id',
        component: AlbumDetailsComponent,
        canActivate: [AuthGuard],
        data: { requiredRole: Role.ManageFotos, adminMode: true }
    }
];