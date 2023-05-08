import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Transferencia } from '../models/transferencia.models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TransferenciaService {

  private listaTransferencia: any[];
  private url: string = 'http://localhost:3000/transferencias';

  constructor(private httpClient: HttpClient) {
    this.listaTransferencia = [];
  }

  get transferencias() {
    return this.listaTransferencia;
  }

  //Observable implementando o modelo de observador.
  getAllTransferencias(): Observable<Transferencia[]>{
    return this.httpClient.get<Transferencia[]>(this.url);
  }

  adicionar(transferencia: Transferencia): Observable<Transferencia> {
    this.hidratarDadosDeTransferencia(transferencia);
    //estava adicionando em um array que depois era usado para mostrar esses dados no front, agora vamos adicionar direto na API
    // this.listaTransferencia.push(transferencia);

    return this.httpClient.post<Transferencia>(this.url, transferencia )
  }

  private hidratarDadosDeTransferencia(transferencia) {
    //pode ser usado para adicionar condicionais de transferencias como a data feriados etc
    transferencia.data = new Date();
  }
}
