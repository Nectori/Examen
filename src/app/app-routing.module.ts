import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { AuthGuard } from '@auth0/auth0-angular';
import { RegistroComponent } from './components/registro/registro.component';
import { RegistrosComponent } from './components/registros/registros.component';
import { AgregarComponent } from './components/agregar/agregar.component';


const routes: Routes = [
  {path: 'agregar', component :AgregarComponent, canActivate:[AuthGuard]},
  {path: 'registros', component: RegistrosComponent},
  {path: 'registro/:id', component: RegistroComponent},
  {path: 'login', component :LoginComponent, canActivate:[AuthGuard]},
  {path: 'principal', component :PrincipalComponent, canActivate:[AuthGuard]},
  {path: '**', pathMatch: 'full', redirectTo: 'registros'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]  
})
export class AppRoutingModule { }
