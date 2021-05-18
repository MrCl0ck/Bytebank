import { Transferencia } from './../models/transferencia.model';
import { TransferenciaService } from './../services/transferencia.service';
import { Component, Output } from "@angular/core";
import { EventEmitter } from "@angular/core";
import { Router } from '@angular/router';

@Component({
    selector:'app-nova-transferencia',
    templateUrl: './nova-transferencia.component.html',
    styleUrls:['./nova-transferencia.component.scss']
})

export class NovaTransferenciaComponent{

  @Output() aoTransferir = new EventEmitter<any>();

  valor: number = 0;
  destino: number = 0;

  constructor(private service: TransferenciaService, private router: Router){}

  transferir(){
    console.log("Solicitada nova transferência\nValor: R$" + this.valor + "\nDestino: " + this.destino);
    const valorEmitir: Transferencia = {valor: this.valor, destino: this.destino};
    this.service.adicionar(valorEmitir).subscribe(
      resultado => {
        console.log(resultado)
        this.router.navigateByUrl('extrato');
      },
      erro => {
        console.error(erro);

      }
    );
  }

  limparCampos(){
    this.valor = 0;
    this.destino = 0;
  }
}
