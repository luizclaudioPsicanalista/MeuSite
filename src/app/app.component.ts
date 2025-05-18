import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PgPrincipalComponent } from "./pg-principal/pg-principal.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PgPrincipalComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'luizclaudioApp';
}
