import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ɵEmptyOutletComponent } from "@angular/router";

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [ɵEmptyOutletComponent, CommonModule],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.scss'
})
export class CardsComponent {


  @Input()
  content!: any[];

}
