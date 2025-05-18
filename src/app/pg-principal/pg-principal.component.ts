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

  private lastScrollTop = 0;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > this.lastScrollTop) {
      // scroll pra baixo
      this.mostrarDiv1 = false;
    } else if (scrollTop < this.lastScrollTop) {
      // scroll pra cima
      this.mostrarDiv1 = true;
    }

    this.lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
  }
}
