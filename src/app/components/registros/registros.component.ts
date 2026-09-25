import { Component } from '@angular/core';
import { CardRegistrosComponent } from './card-registros/card-registros.component';

@Component({
  selector: 'app-registros',
  standalone: true,
  imports: [CardRegistrosComponent],
  templateUrl: './registros.component.html',
  styleUrl: './registros.component.css'
})
export class RegistrosComponent {

}
