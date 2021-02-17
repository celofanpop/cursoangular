import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TemarioComponent } from './pages/temario/temario.component';
import { HomeComponent } from './pages/home/home.component';
import { DirectivasComponent }  from './pages/directivas/directivas.component';
import { PaisesComponent } from './pages/paises/paises.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'temario', component: TemarioComponent},
  {path: 'directivas', component: DirectivasComponent},
  {path: 'paises', component: PaisesComponent},
  {path: '**', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
