import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  imports: [],
  templateUrl: './first-component.component.html',
  styleUrl: './first-component.component.scss'
})
export class FirstComponentComponent implements OnInit {
  name: string = "Leo";
  age: number = 25;
  hobbies: Array<string> = ["Jogar", "Ler", "Assistir"];
   

  constructor() { }

  ngOnInit(): void {

  }


}
