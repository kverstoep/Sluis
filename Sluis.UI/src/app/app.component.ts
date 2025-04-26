import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { materialImports } from './material.imports';
import { MatMenuModule } from '@angular/material/menu';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { NewsComponent } from "./components/news/news.component";
import { MatDrawer, MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { Router } from '@angular/router';
import { MatExpansionModule } from '@angular/material/expansion';
import { INavigationPath, NavigationPaths } from './navigation-path';
import { MatExpansionPanel } from '@angular/material/expansion';

@Component({
    selector: 'app-root',
    imports: [
        ...materialImports,
        MatMenuModule,
        MatSidenavModule,
        NewsComponent,
        MatListModule,
        MatExpansionModule
    ],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
    @ViewChild('drawer') drawer!: MatDrawer;

    private readonly routesToHideNews = ['/admin', '/404'];

    smallScreen: boolean = false;
    hideNews: boolean = false;
    routes = NavigationPaths.paths;

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

            if (!result.matches) {
                this.drawer?.close();
            }
        });
    }

    navigate(path: INavigationPath, panel: MatExpansionPanel = null): void {
        if (!path.subNavigationPaths) {
            panel?.close();
            this.drawer.close();
            this.router.navigateByUrl(path.routeLink);
        }
    }
}