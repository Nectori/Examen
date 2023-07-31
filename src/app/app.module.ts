import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { FormularioComponent } from './components/formulario/formulario.component';

// Import the module from the SDK
import { AuthModule } from '@auth0/auth0-angular';
import { RegistroComponent } from './components/registro/registro.component';
import { RegistrosComponent } from './components/registros/registros.component';
import { AgregarComponent } from './components/agregar/agregar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    LoginComponent,
    PrincipalComponent,
    FormularioComponent,
    RegistroComponent,
    RegistrosComponent,
    AgregarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule.forRoot({
      domain: 'dev-f3mualny3i1mn7oo.us.auth0.com',
      clientId: 'gut2Wz3EMV76EPaT3hdKYGr8rMyb0UqK',
      authorizationParams: {
        redirect_uri: window.location.origin
      }
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
