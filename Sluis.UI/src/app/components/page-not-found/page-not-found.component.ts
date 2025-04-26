import { Component } from '@angular/core';
import { materialImports } from '../../material.imports';

@Component({
    selector: 'page-not-found-component',
    imports: [...materialImports],
    templateUrl: './page-not-found.component.html',
    styleUrl: './page-not-found.component.scss'
})
export class PageNotFoundComponent {

}
