import { Component } from '@angular/core';
import { NgIf, CommonModule } from '@angular/common';

@Component({
  selector: 'app-events',
  imports: [NgIf, CommonModule],
  templateUrl: './events.component.html',
  styleUrl: './events.component.scss'
})
export class EventsComponent {

  show: boolean = false;

  showMessage(): void{
    this.show = !this.show;
  }

}
