import { Component } from '@angular/core';
import { materialImports } from '../../material.imports';

@Component({
    selector: 'layout-component',
    imports: [...materialImports],
    templateUrl: './layout.component.html',
    styleUrl: './layout.component.scss'
})
export class LayoutComponent {

}