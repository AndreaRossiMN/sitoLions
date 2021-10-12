import { Component, Inject, OnInit } from "@angular/core";
import {MatDialog} from '@angular/material/dialog';
import { ClassificaEntry } from "src/services/classifica/classifica-entry";
import { ClassificaTappa } from "src/services/classifica/classifica-tappa";
import { ClassificaService } from "src/services/classifica/classifica.service";



@Component({
    selector: 'classifica',
    templateUrl: './classifica.component.html',
})
export class ClassificaComponent implements OnInit{
    
    tappe?: ClassificaTappa[] = new Array();
    squadre?: ClassificaEntry[] = new Array();

    constructor(
        @Inject(ClassificaService)private classificaService: ClassificaService,
    ){
    }

    ngOnInit(): void {
        this.classificaService.getClassifica().subscribe(res =>{
            this.tappe = JSON.parse(res.body).Items;
            let squadretmp: ClassificaEntry[] = new Array();
            this.tappe[0].entries.forEach(entry =>{
                let posizioneSquadra: ClassificaEntry = { team: entry.team, points: 0 };
                this.classificaService.getTeamHistory(this.tappe, entry.team).entries.forEach(res=>{
                    posizioneSquadra.points += res.points;
                });

                squadretmp.push(posizioneSquadra);
            });
            this.squadre = undefined;
            this.squadre = squadretmp;
        });

    }
}
