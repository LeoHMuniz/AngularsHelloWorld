import { Component } from '@angular/core';
import { DatePipe, CommonModule } from '@angular/common';

@Component({
  selector: 'app-pipes',
  imports: [CommonModule, DatePipe],
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.scss'
})
export class PipesComponent {

  someText = "Algum texto";
  today = new Date();

}
