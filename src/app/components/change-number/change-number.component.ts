import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-change-number',
  imports: [],
  templateUrl: './change-number.component.html',
  styleUrl: './change-number.component.scss'
})
export class ChangeNumberComponent {
@Output() changedNumber: EventEmitter<any> = new EventEmitter();

  handleClick(){
    this.changedNumber.emit();
  }

}
