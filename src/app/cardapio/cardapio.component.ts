import { Component } from '@angular/core';

@Component({
  selector: 'app-cardapio',
  templateUrl: './cardapio.component.html',
  styleUrls: ['./cardapio.component.css']
})
export class CardapioComponent {
  CalcB() {
  let QuantB = 0;
  let TempB = 0;
  var Bot = 0;
  QuantB = Bot * 10;
  TempB = Bot * 5;
  alert ("Seu pedido custa: " + QuantB + " Reais" + "\n" + "O tempo de preparo é de: " + TempB + " Minutos");
}
}
