import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Transferencia } from '../models/transferencia.model';

@Injectable({
  providedIn: 'root'
})

export class TransferenciaService {

  private listaTransferencia: any[] = [];
  private url = 'http://localhost:3000/transferencias';
  constructor(private httpClient: HttpClient) {
    this.listaTransferencia = []
  }

  get tranferencias(){
    return this.listaTransferencia;
  }

  adicionar(transferencia: Transferencia): Observable<Transferencia>{//retorna um observable do tipo transferencia, com o objeto transferencia que foi recebido por parâmetro
    this.hidratar(transferencia)
    return this.httpClient.post<Transferencia>(this.url, transferencia);//faz um método post na url passada...
  }

  todas(): Observable<Transferencia[]>{
    return this.httpClient.get<Transferencia[]>(this.url);
  }

  private hidratar(transferencia: any){
    transferencia.data = new Date();
  }


}
