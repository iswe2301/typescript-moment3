import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-convert',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './convert.component.html',
  styleUrl: './convert.component.scss'
})

export class ConvertComponent {

  // Egenskaper, sätts initalt till värdet 0
  meter: number = 0;
  feet: number = 0;
  celsius: number = 0;
  fahrenheit: number = 0;

  // Metod för att konvertera meter till feet
  convertToFeet(): void {
    this.feet = this.meter * 3.28;
  }

  // Metod för att konvertera feet till meter
  convertToMeters(): void {
    this.meter = this.feet / 3.28;
  }

  // Metod för att konvertera celsius till fahrenheit
  convertToFahrenheit(): void {
    this.fahrenheit = (this.celsius * 9 / 5) + 32;
  }

  // Metod för att konvertera fahrenheit till celsius
  convertToCelsius(): void {
    this.celsius = (this.fahrenheit - 32) * 5 / 9;
  }
}
