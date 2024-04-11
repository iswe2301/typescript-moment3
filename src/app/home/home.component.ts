import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})

export class HomeComponent {
  // Skapar egenskaper av typen sträng och tilldelar bildens sökväg som värdet samt kattens prat i HTML
  catImage: string = "assets/images/cat1.png";
  catTalk: string = "<strong>PSSST...<br>Klicka på Mej, så säger jag Hej!</strong>";

  // Metod för att byta bild
  toggleImage(): void {
    // Kontrollerar om bilden är bild 1, byter till bild 2 och ändrar kattens prat
    if (this.catImage == "assets/images/cat1.png") {
      this.catImage = "assets/images/cat2.png";
      this.catTalk = "<strong>Hej på dig, hoppas du får en Majuig dag!</strong>";
      // Kontrollerar om bilden är bild 2, byter till bild 1 och ändrar kattens prat
    } else if (this.catImage = "assets/images/cat2.png") {
      this.catImage = "assets/images/cat1.png";
      this.catTalk = "<strong>PSSST!<br>Klicka på Mej, så säger jag Hej!</strong>";
    }
  }
}
