import { Component } from '@angular/core';
import { NgIf, CommonModule, NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'app-if-render',
  imports: [NgIf, CommonModule, NgTemplateOutlet],
  templateUrl: './if-render.component.html',
  styleUrl: './if-render.component.scss'
})
export class IfRenderComponent {

  canShow: boolean = false;
  name: string = 'Matheus';

}
