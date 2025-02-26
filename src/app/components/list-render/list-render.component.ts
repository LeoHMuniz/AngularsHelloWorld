import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { Animal } from '../../interfaces/Animal';

@Component({
  selector: 'app-list-render',
  imports: [NgFor],
  templateUrl: './list-render.component.html',
  styleUrl: './list-render.component.scss'
})
export class ListRenderComponent {

  animalDetails = "";

  showAge(animal: Animal){

    this.animalDetails = `${animal.name} is ${animal.age} years old`

  }

  animals: Animal[] = [
    {
      name: "Tommy",
      type: "Dog",
      age: 3,
    },
    {
      name: "Toothless",
      type: "Dragon",
      age: 22,
    },
    {
      name: "Rimuru",
      type: "Slime",
      age: 40,
    },
  ]

}
