import { Component } from '@angular/core';
import { materialImports } from '../../material.imports';

@Component({
    selector: 'admin-component',
    imports: [...materialImports],
    templateUrl: './admin.component.html',
    styleUrl: './admin.component.scss'
})
export class AdminComponent {

}
