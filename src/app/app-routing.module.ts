import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PicolesComponent } from './picoles/picoles.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CardapioComponent } from './cardapio/cardapio.component';
import { MascoteComponent } from './mascote/mascote.component';
import { HomeComponent } from './pages/home/home.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ComprarComponent } from './comprar/comprar.component';
import { SobrenosComponent } from './sobrenos/sobrenos.component';
import { SlideComponent } from './slide/slide.component';

const routes: Routes = [
  {path: 'picoles', component: PicolesComponent},
  {path: 'navbar', component: NavbarComponent},
  {path: 'cardapio', component: CardapioComponent},
  {path: 'mascote', component: MascoteComponent},
  {path: 'home', component: HomeComponent},
  {path: 'cadastro', component: CadastroComponent},
  {path: 'comprar', component: ComprarComponent},
  {path: 'sobrenos', component: SobrenosComponent},
  {path: 'slide', component: SlideComponent},

  

  {
    path: '' , redirectTo:'home', pathMatch: 'full'
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
