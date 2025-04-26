import { Component } from '@angular/core';
import { materialImports } from '../../material.imports';

@Component({
    selector: 'home-component',
    imports: [...materialImports],
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss'
})
export class HomeComponent {

}
