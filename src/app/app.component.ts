import { Component } from '@angular/core';
import { TransferenciaService } from './services/transferencia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'bytebank';

  //agora recebe o evento e propaga para o SERVICE
  constructor(private transferenciaService: TransferenciaService){}

  // transferir($event) {
  //   this.transferenciaService.adicionar($event)
  // }

}
