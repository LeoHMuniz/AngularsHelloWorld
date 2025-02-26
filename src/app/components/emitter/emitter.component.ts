import { Component, input } from '@angular/core';
import { ChangeNumberComponent } from '../change-number/change-number.component';

@Component({
  selector: 'app-emitter',
  imports: [ChangeNumberComponent],
  templateUrl: './emitter.component.html',
  styleUrl: './emitter.component.scss'
})
export class EmitterComponent {
  myNumber: number = 0;


  onChangedNumber() {
    this.myNumber = Math.floor(Math.random() * 10);
  }

}
