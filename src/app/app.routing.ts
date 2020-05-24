//Importar modulos
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ZapatillasComponent } from './zapatillas/zapatillas.component';
import { CursosComponent } from './cursos/cursos.component';
import { IngresoComponent } from './ingreso/ingreso.component';

//Array de rutas
const appRoutes: Routes = [
  {path:'home', component: IngresoComponent},
  {path:'zapatillas', component: ZapatillasComponent},
  {path:'cursos', component: CursosComponent},
  {path:'**', component: IngresoComponent} //Error 404
];

export const appRoutingProviders:any[] = [];
export const Routing:ModuleWithProviders = RouterModule.forRoot(appRoutes);
