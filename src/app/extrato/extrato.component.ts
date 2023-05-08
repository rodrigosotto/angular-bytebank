import { Component, Input, OnInit } from '@angular/core';
import { TransferenciaService } from '../services/transferencia.service';
import {Transferencia} from '../models/transferencia.models'

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})
export class ExtratoComponent implements OnInit {
  transferencias: any[];

  constructor(private transferenciaService: TransferenciaService){}


  ngOnInit(): void {
    //aqui estava recebendo dentro de um array agora vai ser diferente
    // this.transferencias = this.transferenciaService.transferencias

    this.transferenciaService.getAllTransferencias().subscribe((transferencias: Transferencia[]) => {
      console.table(transferencias)
      //atribui a propriedade que chegou como paramentro
      this.transferencias = transferencias;
    })
  }

}
