import { Component, Inject, NgModule, OnInit } from "@angular/core";
import { inject } from "@angular/core/testing";
import { CalendarOptions } from "@fullcalendar/core";
import { CalendarioEventiService } from "src/services/calendario/calendario-eventi.service";
import { Event, EventoAws } from "src/services/calendario/evento";
import {MatDialog} from '@angular/material/dialog';
import { NuovoEventoComponent } from "./calendario/nuovo-evento.component";



@Component({
    selector: 'calendario-eventi',
    templateUrl: './calendario-eventi.component.html',
})
export class CalendarioEventiComponent implements OnInit{
    
    public eventi : Event[] = new Array();
    
    calendarOptions: CalendarOptions = {
        initialView: 'dayGridMonth',
        dateClick: this.handleDateClick.bind(this), 
        eventClick: this.handleEventClick.bind(this),
        events: new Array()
    };
    
      
    constructor(
        @Inject(CalendarioEventiService)private eventiService: CalendarioEventiService,
        private dialog: MatDialog,
    ){
        this.loadEventi();
    }

    ngOnInit(): void {
        
    }

    loadEventi(){
        this.eventi = new Array();

        this.eventiService.getEventi({}).subscribe(x => {
            JSON.parse(x.body).Items.forEach((el: EventoAws) => {  
                this.eventi.push({ title: el.Nome, date: el.Data, Id: el.Id})
            });
        });

        this.calendarOptions.events = this.eventi;
    }

    handleDateClick(arg: any) {
        let dialogRef = this.dialog.open(NuovoEventoComponent, {
            height: '400px',
            width: '600px',
            data: {
                date: arg,
                edit: false
            }
        });
        dialogRef.afterClosed().subscribe(x => { this.loadEventi(); });
    }

    handleEventClick(arg: any) {
        let dialogRef = this.dialog.open(NuovoEventoComponent, {
            height: '400px',
            width: '600px',
            data: {
                event: {
                    Nome: arg.event.title,
                    Data: arg.event.start
                },
                edit: true
            }
        });
        dialogRef.afterClosed().subscribe(x => { this.loadEventi(); });
    }

}
