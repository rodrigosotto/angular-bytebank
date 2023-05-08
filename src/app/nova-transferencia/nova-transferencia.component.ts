import { TransferenciaService } from './../services/transferencia.service';
import { Component, EventEmitter, Output } from '@angular/core';
import { Transferencia } from '../models/transferencia.models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss'],
})
export class NovaTransferenciaComponent {
  @Output() aoTransferir = new EventEmitter<any>();

  valor: number;
  destino: number;

  constructor(private transferenciaService: TransferenciaService, private router: Router) {}

  onTransferir() {
    console.log('Solicitada nova transferência');
    //ao inves de emitir para quem chamou vamos passar diretamente para o service
    // this.aoTransferir.emit(valorEmitir)

    const valorEmitir: Transferencia = {
      valor: this.valor,
      destino: this.destino,
    };
    this.transferenciaService.adicionar(valorEmitir).subscribe(
      (resultado) => {
        console.log(resultado);
        this.limparCampos();

        this.router.navigateByUrl('extrato')

      },
      (error) => console.log(error)
    );
  }

  limparCampos() {
    this.valor = 0;
    this.destino = 0;
  }
}
