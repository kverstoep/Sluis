import { Routes } from '@angular/router';
import { GebruikersComponent } from './components/gebruikers/gebruikers.component';
import { FotosComponent } from './components/fotos/fotos.component';
import { AccountComponent } from './components/account/account.component';
import { Role } from '../gebruiker/gebruiker';
import { AuthGuard } from '../../auth-guard';

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
        path: 'fotos',
        component: FotosComponent,
        canActivate: [AuthGuard],
        data: { requiredRole: Role.ManageFotos }
    }
];