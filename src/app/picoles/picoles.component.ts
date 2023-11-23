import { Component } from '@angular/core';

@Component({
  selector: 'app-picoles',
  templateUrl: './picoles.component.html',
  styleUrls: ['./picoles.component.css']
})
export class PicolesComponent {

  CalcP() {
    let QuantP = 0;
    let TempP = 0;
    var Bot = 0;
    QuantP = Bot * 5;
    TempP = Bot * 2;
    alert ("Seu pedido custa: " + QuantP + " Reais" + "\n" + "O tempo de preparo é de: " + TempP + " Minutos");
  }
}
