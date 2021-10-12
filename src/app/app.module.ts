import { APP_INITIALIZER, Injector, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FullCalendarModule } from '@fullcalendar/angular'; 
import dayGridPlugin from '@fullcalendar/daygrid'; 
import interactionPlugin from '@fullcalendar/interaction'; 
import { TranslateModule } from '@ngx-translate/core';
import { CalendarioEventiComponent } from 'src/pages/calendario-eventi.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalendarioEventiService } from 'src/services/calendario/calendario-eventi.service';
import { NuovoEventoComponent } from 'src/pages/calendario/nuovo-evento.component';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { ClassificaService } from 'src/services/classifica/classifica.service';
import { TappeComponent } from 'src/pages/classifica/tappe.component';
import { ClassificaComponent } from 'src/pages/classifica/classifica.component';

FullCalendarModule.registerPlugins([ 
  dayGridPlugin,
  interactionPlugin
]);

@NgModule({
  declarations: [
    AppComponent,
    CalendarioEventiComponent,
    NuovoEventoComponent,
    TappeComponent,
    ClassificaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TranslateModule.forRoot({
      defaultLanguage: 'it'
    }),
    FullCalendarModule,
    HttpClientModule,
    MatDialogModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [
    CalendarioEventiService,
    ClassificaService,
    DatePipe, 
    {
    provide: MatDialogRef,
    useValue: {}
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
