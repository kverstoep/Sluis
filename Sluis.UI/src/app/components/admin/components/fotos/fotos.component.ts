import { Component } from '@angular/core';
import { materialImports } from '../../../../material.imports';
import { IGebruiker } from '../../../gebruiker/gebruiker';
import { GebruikerProvider } from '../../gebruiker-provider';

@Component({
    selector: 'fotos-component',
    imports: [...materialImports],
    templateUrl: './fotos.component.html',
    styleUrl: './fotos.component.scss'
})
export class FotosComponent {
    gebruiker: IGebruiker;

    constructor(private gebruikerProvider: GebruikerProvider) {
        this.gebruikerProvider.gebruiker.subscribe(gebruiker => {
            this.gebruiker = gebruiker;
        });
    }
}