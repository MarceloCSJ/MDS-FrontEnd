import { Component } from '@angular/core';
import { CardRegistrosComponent } from './card-registros/card-registros.component';
import { Registro } from './card-registros/Registro';
import { NgFor } from '@angular/common';

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
  registros: Registro[] = [
    {
      titulo: 'Primeiro registro aqui',
      conteudo: 'Este é o conteúdo do primeiro registro',
      data: new Date('2026-09-10'),
    },
    {
      titulo: 'Segundo registro aqui',
      conteudo: 'Este é o conteúdo do segundo registro',
      data: new Date('2026-09-11'),
    },
    {
      titulo: 'Terceiro registro aqui',
      conteudo: 'Este é o conteúdo do terceiro registro',
      data: new Date('2026-10-01'),
    },
    {
      titulo: 'Quarto registro aqui',
      conteudo: 'Este é o conteúdo do quarto registro',
      data: new Date('2026-10-02'),
    },
    {
      titulo: 'Quinto registro aqui',
      conteudo: 'Este é o conteúdo do quinto registro',
      data: new Date('2026-10-04'),
    },
  ]
}
