import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import * as $_ from 'jquery';
import { EditEventoAws, Event, EventoAws } from './evento';
import { IEventiFilter } from './eventi-filter';
import { Observable } from 'rxjs';
import { ILambdaResponse } from '../common/lambda-response';
const $ = $_;

@Injectable()
export class CalendarioEventiService {
  
  constructor(private http: HttpClient) { }
  
  public getEventi(filter: IEventiFilter): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/Eventi`);
  }

  public createEvento(evento: EventoAws): Observable<any> {
		return this.http.put<any>(`${environment.apiUrl}/Eventi`, evento);
	}

  public updateEvento(evento: EventoAws, oldData: Date): Observable<any> {
		let editEvento: EditEventoAws = {
      Id: evento.Id,
      Nome: evento.Nome,
      Data: evento.Data,
      OldData: oldData
    };
    return this.http.post<any>(`${environment.apiUrl}/Eventi`, editEvento);
	}

}
