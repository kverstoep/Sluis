import { Component, Input } from "@angular/core";
import { materialGenericImports } from "../../../material.imports";

@Component({
    selector: 'header-toolbar',
    imports: [...materialGenericImports],
    templateUrl: './toolbar.component.html',
    styleUrl: './toolbar.component.scss'
})
export class HeaderToolbarComponent {
    @Input() title: string;
}