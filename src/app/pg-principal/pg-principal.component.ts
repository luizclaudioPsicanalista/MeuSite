import { NgIf } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-pg-principal',
  standalone: true,
  imports: [NgIf],
  templateUrl: './pg-principal.component.html',
  styleUrl: './pg-principal.component.scss'
})
export class PgPrincipalComponent {


  mostrarDiv1 = true;


}
