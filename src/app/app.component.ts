import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ExpandingCardComponent } from "./expanding-card/expanding-card.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ExpandingCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '01-expanding-cards';
}
