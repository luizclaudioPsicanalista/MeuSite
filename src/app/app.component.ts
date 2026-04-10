import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PgPrincipalComponent } from "./pg-principal/pg-principal.component";
import { CardsComponent } from './components/cards/cards.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    PgPrincipalComponent,
    CardsComponent,
  
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'luizclaudioApp';
}
