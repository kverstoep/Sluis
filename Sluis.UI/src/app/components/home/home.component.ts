import { Component } from '@angular/core';
import { materialGenericImports } from '../../material.imports';

@Component({
    selector: 'home-component',
    imports: [...materialGenericImports],
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss'
})
export class HomeComponent {

}
