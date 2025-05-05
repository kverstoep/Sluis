import { Component } from '@angular/core';
import { materialGenericImports } from '../../material.imports';

@Component({
    selector: 'page-not-found-component',
    imports: [...materialGenericImports],
    templateUrl: './page-not-found.component.html',
    styleUrl: './page-not-found.component.scss'
})
export class PageNotFoundComponent {

}
