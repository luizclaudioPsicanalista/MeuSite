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


  mostrarOutraDiv = false;

@HostListener('window:wheel', ['$event'])
onWheel(event: WheelEvent) {
  if (event.deltaY > 0) {
    this.mostrarOutraDiv = true;
  } else {
    this.mostrarOutraDiv = false;
  }
}
}
