import { Component } from '@angular/core';
import { materialGenericImports } from '../../material.imports';

@Component({
    selector: 'news-component',
    imports: [...materialGenericImports],
    templateUrl: './news.component.html',
    styleUrl: './news.component.scss'
})
export class NewsComponent {

}
