import { Component } from '@angular/core';
import { materialImports } from '../../material.imports';

@Component({
    selector: 'news-component',
    imports: [...materialImports],
    templateUrl: './news.component.html',
    styleUrl: './news.component.scss'
})
export class NewsComponent {

}
