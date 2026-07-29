import { Component } from '@angular/core';
import { CalculadoraComponent } from './calculadora/calculadora';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CalculadoraComponent],
  template: '<app-calculadora></app-calculadora>'
})
export class AppComponent {}