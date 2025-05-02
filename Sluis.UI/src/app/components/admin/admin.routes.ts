import { Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { ManageUsersComponent } from './components/gebruikers/gebruikers.component';

export const adminRoutes: Routes = [
    { path: '', component: AdminComponent, title: 'Admin Dashboard' },
    { path: 'gebruikers', component: ManageUsersComponent, title: 'Manage Users' }
];