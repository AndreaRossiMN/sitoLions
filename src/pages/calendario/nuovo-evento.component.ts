import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, Inject, OnInit } from "@angular/core";
import { EventoAws } from "src/services/calendario/evento";
import { DatePipe } from '@angular/common';
import { CalendarioEventiService } from 'src/services/calendario/calendario-eventi.service';

@Component({
    selector: 'nuovo-evento',
    templateUrl: './nuovo-evento.component.html',
})
export class NuovoEventoComponent implements OnInit{
    
    public evento: EventoAws = {} as EventoAws;
    private oldData: Date; 
    public hour: string;
    public editMode: boolean;


    constructor(
        @Inject(MAT_DIALOG_DATA) public data: any,
        @Inject(CalendarioEventiService)private eventiService: CalendarioEventiService,        
        @Inject(DatePipe)private datePipe: DatePipe,
        public dialogRef: MatDialogRef<NuovoEventoComponent>
    ){
        this.editMode = data.edit;

        if(data.date)
            this.evento.Data = data.date.date;
        if(this.data.event){
            this.evento = data.event;
            this.oldData = this.evento.Data;
            this.hour = datePipe.transform(this.evento.Data, 'hh:mm')
        }
    }

    ngOnInit(): void { 
        
    }

    public salva(){
        
        if(this.editMode){
            this.eventiService.updateEvento(this.evento, this.oldData).subscribe(x => {
                console.log(x);
                this.dialogRef.close();
            });    
        }else{
            this.eventiService.createEvento(this.evento).subscribe(x => {
                console.log(x);
                this.dialogRef.close();
            });
        }
    } 

    public formatHour(){
        if(this.hour.length == 2 && this.hour.indexOf(':') == -1)
            this.hour = this.hour + ':00';
        if(this.hour.length == 5){
            this.evento.Data.setHours(+this.hour.substring(0,2), +this.hour.substring(3,5));
        }
    }

}