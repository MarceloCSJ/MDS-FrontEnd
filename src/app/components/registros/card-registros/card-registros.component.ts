import { Component, Input } from '@angular/core';
import { Registro } from './Registro';

@Component({
  selector: 'app-card-registros',
  standalone: true,
  imports: [],
  templateUrl: './card-registros.component.html',
  styleUrl: './card-registros.component.css'
})
export class CardRegistrosComponent {
// diretiva de atributo
  @Input()
//registroDestino
  registro: Registro = {
    titulo: '',
    conteudo: '',
    data: new Date('2020-01-01'),
  };
}
