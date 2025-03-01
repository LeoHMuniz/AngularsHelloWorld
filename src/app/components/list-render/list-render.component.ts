import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { Animal } from '../../interfaces/Animal';
import { ListService } from '../../services/list.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-list-render',
  imports: [NgFor, RouterLink],
  templateUrl: './list-render.component.html',
  styleUrl: './list-render.component.scss'
})
export class ListRenderComponent {

  animalDetails = "";

  showAge(animal: Animal) {

    this.animalDetails = `${animal.name} is ${animal.age} years old`

  }

  animals: Animal[] = []
  //   {
  //     name: "Tommy",
  //     type: "Dog",
  //     age: 3,
  //   },
  //   {
  //     name: "Toothless",
  //     type: "Dragon",
  //     age: 22,
  //   },
  //   {
  //     name: "Rimuru",
  //     type: "Slime",
  //     age: 40,
  //   },
  // ]

  constructor(private listService: ListService) {
    this.getAnimals();
  }

  removeAnimal(animal: Animal) {
    console.log(`Removendo animal: ${animal.name}`)
    this.animals = this.listService.remove(this.animals, animal);
  }

  getAnimals(): void {
    this.listService.getAll().subscribe((animals) => (this.animals = animals));
  }

}
