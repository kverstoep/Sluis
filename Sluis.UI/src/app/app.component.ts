import { Component, OnInit } from '@angular/core';
import { materialImports } from './material.imports';
import { MatMenuModule } from '@angular/material/menu';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { NewsComponent } from "./components/news/news.component";
import { Router } from '@angular/router';

@Component({
    selector: 'app-root',
    imports: [...materialImports, MatMenuModule, NewsComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
    private readonly routesToHideNews = ['/admin', '/404'];

    smallScreen: boolean = false;
    hideNews: boolean = false;

    constructor(
        private responsive: BreakpointObserver,
        private router: Router) {
        this.router.events.subscribe(() => {
            this.hideNews = this.routesToHideNews.some(prefix => this.router.url.startsWith(prefix));
        });
    }

    ngOnInit(): void {
        this.responsive.observe([
            Breakpoints.HandsetPortrait,
            Breakpoints.TabletPortrait,
        ]).subscribe(result => {
            this.smallScreen = result.matches;
        });
    }
}
