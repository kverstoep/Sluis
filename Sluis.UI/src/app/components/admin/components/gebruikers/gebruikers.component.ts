import { Component, OnInit } from '@angular/core';
import { materialImports } from '../../../../material.imports';
import { MatTableModule } from '@angular/material/table';
import { IGebruiker } from '../../../gebruiker/gebruiker';
import { GebruikerService } from '../../../gebruiker/gebruiker.service';
import { MatDialog } from '@angular/material/dialog';
import { UpsertGebruikerDialog } from './upsert/upsert.component';
import { DeleteGebruikerDialog } from './delete/delete.component';
import { GebruikerProvider } from '../../gebruiker-provider';
import { HeaderToolbarComponent } from '../../../shared/toolbar/toolbar.component';

@Component({
    selector: 'gebruikers-component',
    imports: [...materialImports, MatTableModule, HeaderToolbarComponent],
    templateUrl: './gebruikers.component.html',
    styleUrl: './gebruikers.component.scss'
})
export class GebruikersComponent implements OnInit {
    gebruikers: IGebruiker[];

    constructor(
        private service: GebruikerService,
        private dialog: MatDialog,
        private gebruikerProvider: GebruikerProvider
    ) { }

    ngOnInit(): void {
        this.getGebruikers();
    }

    openAddGebruikerDialog(): void {
        this.dialog.open(UpsertGebruikerDialog, {
            width: '400px',
            data: { actie: 'toevoegen' }
        }).componentInstance.saved.subscribe(_ => {
            this.getGebruikers();
        });
    }

    openEditGebruikerDialog(gebruiker: IGebruiker): void {
        this.dialog.open(UpsertGebruikerDialog, {
            width: '400px',
            data: { gebruiker: gebruiker, actie: 'bewerken' }
        }).componentInstance.saved.subscribe(_ => {
            this.gebruikerProvider.fetchGebruiker();
            this.getGebruikers();
        });
    }

    openDeleteGebruikerDialog(gebruiker: IGebruiker): void {
        this.dialog.open(DeleteGebruikerDialog, {
            data: { gebruiker: gebruiker }
        }).componentInstance.saved.subscribe(_ => {
            this.getGebruikers();
        });
    }

    getGebruikers(): void {
        this.service.getGebruikers().subscribe(gebruikers => this.gebruikers = gebruikers);
    }
}