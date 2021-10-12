import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from 'src/pages/home.component';
import { CalendarioEventiComponent } from 'src/pages/calendario-eventi.component';

const routes: Routes = [
  { path: 'calendario', component: CalendarioEventiComponent, data: { title: 'pagina1' } }
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
