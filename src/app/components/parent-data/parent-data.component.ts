import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-parent-data',
  imports: [],
  templateUrl: './parent-data.component.html',
  styleUrl: './parent-data.component.scss'
})
export class ParentDataComponent {
  @Input() name: string = "";
  @Input() email: string = "";

  constructor(){}

  ngOnInit(): void {}

}
