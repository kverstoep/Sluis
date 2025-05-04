import { Component, Input } from "@angular/core";
import { materialImports } from "../../../material.imports";

@Component({
    selector: 'header-toolbar',
    imports: [...materialImports],
    templateUrl: './toolbar.component.html',
    styleUrl: './toolbar.component.scss'
})
export class HeaderToolbarComponent {
    @Input() title: string;
}