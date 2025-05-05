import { Component } from '@angular/core';
import { materialGenericImports } from '../../../../material.imports';
import { GebruikerProvider } from '../../gebruiker-provider';
import { IGebruiker } from '../../../gebruiker/gebruiker';
import { HeaderToolbarComponent } from '../../../shared/toolbar/toolbar.component';

@Component({
    selector: 'account-component',
    imports: [...materialGenericImports, HeaderToolbarComponent],
    templateUrl: './account.component.html',
    styleUrl: './account.component.scss'
})
export class AccountComponent {
    gebruiker: IGebruiker;

    constructor(private gebruikerProvider: GebruikerProvider) {
        this.gebruikerProvider.gebruiker.subscribe(gebruiker => {
            if (gebruiker) {
                this.gebruiker = gebruiker;
            }
        });
    }
}