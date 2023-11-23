import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BodyComponent } from './body/body.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { PicolesComponent } from './picoles/picoles.component';
import { CardapioComponent } from './cardapio/cardapio.component';
import { ComprarComponent } from './comprar/comprar.component';
import { SobrenosComponent } from './sobrenos/sobrenos.component';
import { MascoteComponent } from './mascote/mascote.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { HomeComponent } from './pages/home/home.component';
import { SlideComponent } from './slide/slide.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BodyComponent,
    PicolesComponent,
    CardapioComponent,
    ComprarComponent,
    SobrenosComponent,
    MascoteComponent,
    CadastroComponent,
    HomeComponent,
    SlideComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
