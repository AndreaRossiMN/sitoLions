import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from 'src/pages/home.component';
import { CalendarioEventiComponent } from 'src/pages/calendario-eventi.component';
import { TappeComponent } from 'src/pages/classifica/tappe.component';
import { ClassificaComponent } from 'src/pages/classifica/classifica.component';

const routes: Routes = [
  { path: 'calendario', component: CalendarioEventiComponent, data: { title: 'Calendario' } },
  { path: 'classifica', component: ClassificaComponent, data: { title: 'Classifica SEM' } },
  { path: 'tappe', component: TappeComponent, data: { title: 'Tappe SEM' } }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    RouterModule.forRoot([{ path: "", component: HomeComponent, pathMatch: "full", data: { title: "Home" } }], { relativeLinkResolution: "legacy" }),
    RouterModule.forRoot([
      { path: "**", redirectTo: "" }
    ], { relativeLinkResolution: "legacy" }),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
