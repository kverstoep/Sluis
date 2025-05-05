import { Component } from '@angular/core';
import { materialGenericImports } from '../../material.imports';

@Component({
    selector: 'fotos-component',
    imports: [...materialGenericImports],
    templateUrl: './fotos.component.html',
    styleUrl: './fotos.component.scss'
})
export class FotosComponent {

}
