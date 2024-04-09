import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-mobile-menu',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './mobile-menu.component.html',
  styleUrl: './mobile-menu.component.scss'
})

export class MobileMenuComponent {

  // Skapat en egenskap av typen boolean för att definiera mobilmenyns synlighet, sätter initalt till false (dold)
  isVisible: boolean = false;

  // Metod för att visa/dölja menyn, växlar värdet på isVisible som anropas när användaren klickar på menyknappen
  toggleMenu(): void {
    this.isVisible = !this.isVisible; // Väclar mellan true och false
  }

  // Metod för att dölja menyn vid klick på menylänk eller overlay
  hideMenu(): void {
    this.isVisible = false;
  }
}
