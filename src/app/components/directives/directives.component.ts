import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-directives',
  imports: [],
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.scss'
})


export class DirectivesComponent {
  size = 40;
  font = "Arial";
  color = "grey";
  classes = ["green-title", "small-title"]

}
