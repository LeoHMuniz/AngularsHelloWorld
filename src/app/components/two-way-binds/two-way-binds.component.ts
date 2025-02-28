import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-two-way-binds',
  imports: [FormsModule, CommonModule],
  templateUrl: './two-way-binds.component.html',
  styleUrl: './two-way-binds.component.scss'
})
export class TwoWayBindsComponent {

  name = "";

}
