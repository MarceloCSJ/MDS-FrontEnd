import { Component } from '@angular/core';
import { CardRegistrosComponent } from './card-registros/card-registros.component';
import { Registro } from './card-registros/Registro';
import { NgFor } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { AutenticacaoService } from '../../../services/autenticacao.service';

@Component({
  selector: 'app-registros',
  standalone: true,
  imports: [CardRegistrosComponent, NgFor, FormsModule],
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
  novoRegistro: Registro = {
    titulo: "",
    conteudo: "",
    dataPagina: new Date()
  };

  // o _http está com o _ por ser uma variável privada e ficar mais explícito desta forma.
  constructor(private _http: HttpClient, private autenticacaoService: AutenticacaoService) {
    //essa é uma estrutura de injeção de dependência.
  }

  ngOnInit() : void{
    const token = this.autenticacaoService.retornarToken();
    //                          http://localhost:5029/registros
    this._http.get<Registro[]>('http://localhost:4200/api/registros', {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
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
    const token = this.autenticacaoService.retornarToken();
    this._http.post<Registro>('http://localhost:4200/api/registros', {
      ...this.novoRegistro,
      "usuarioId": 1,
    }, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    }).subscribe({
      next: (registro) => {
        this.registros.push(registro);
        this.modalSolicitado = false;
      }
    })
  }
}
