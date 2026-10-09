import { Component } from '@angular/core';
import { CardRegistrosComponent } from './card-registros/card-registros.component';
import { Registro } from './card-registros/Registro';
import { NgFor } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-registros',
  standalone: true,
  imports: [CardRegistrosComponent, NgFor],
  templateUrl: './registros.component.html',
  styleUrl: './registros.component.css'
})
export class RegistrosComponent {
//registroOrigem
  // registro: Registro = {
  //   titulo: 'Título do Registro',
  //   conteudo: 'Conteúdo do Registro...',
  //   data: new Date('2024-01-01'),
  // };
//como é um array, deve ser no plural
  registros: Registro[] = []
  modalSolicitado: boolean = false;

  // o _http está com o _ por ser uma variável privada e ficar mais explícito desta forma.
  constructor(private _http: HttpClient) {
    //essa é uma estrutura de injeção de dependência.
  }

  ngOnInit() : void{
    //                          http://localhost:5029/registros
    this._http.get<Registro[]>('http://localhost:4200/api/registros',
      {
        transferCache: false
      }
    )
    .subscribe({
      next: (registros) => {
        this.registros = registros;
      },
      error: (error) => {
        console.error('Erro ao obter os registros: ', error);
      }
    });
  }

  adicionarRegistro() {
    this.modalSolicitado = false;
  }
}
