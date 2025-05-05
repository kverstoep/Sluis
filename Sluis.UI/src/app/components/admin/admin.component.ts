import { Component } from '@angular/core';
import { materialGenericImports } from '../../material.imports';
import { IGebruiker, Role } from '../gebruiker/gebruiker';
import { MatTabsModule } from '@angular/material/tabs';
import { GebruikerProvider } from './gebruiker-provider';

@Component({
    selector: 'admin-component',
    imports: [...materialGenericImports, MatTabsModule],
    templateUrl: './admin.component.html',
    styleUrl: './admin.component.scss'
})
export class AdminComponent {
    gebruiker: IGebruiker;
    Roles = Role;

    constructor(
        private gebruikerProvider: GebruikerProvider
    ) {
        this.gebruikerProvider.gebruiker.subscribe(gebruiker => {
            if (gebruiker) {
                this.gebruiker = gebruiker;
            }
        });
    }

    hasRole(role: Role): boolean {
        if (!this.gebruiker) {
            return false;
        }

        return this.gebruiker?.roles.includes(role)
    }
}
