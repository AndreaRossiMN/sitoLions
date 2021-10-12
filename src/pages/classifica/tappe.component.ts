import { Component, Inject, OnInit } from "@angular/core";
import {MatDialog} from '@angular/material/dialog';
import { ClassificaTappa } from "src/services/classifica/classifica-tappa";
import { ClassificaService } from "src/services/classifica/classifica.service";



@Component({
    selector: 'tappe',
    templateUrl: './tappe.component.html',
})
export class TappeComponent implements OnInit{
    
    tappe?: ClassificaTappa[] = new Array();

    constructor(
        @Inject(ClassificaService)private classificaService: ClassificaService,
    ){
    }

    ngOnInit(): void {
        this.classificaService.getClassifica().subscribe(res =>{
            this.tappe = JSON.parse(res.body).Items;
        });
    }
}
