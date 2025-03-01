import { Component } from '@angular/core';
import { Animal } from '../../interfaces/Animal';
import { ListService } from '../../services/list.service';
import { ActivatedRoute, RouterLinkActive } from '@angular/router';
import { NgIf, CommonModule } from '@angular/common';

@Component({
  selector: 'app-item-detail',
  imports: [NgIf, CommonModule],
  templateUrl: './item-detail.component.html',
  styleUrl: './item-detail.component.scss'
})
export class ItemDetailComponent {

  constructor(private listService: ListService, private route: ActivatedRoute) {
    this.getAnimal();
  }

  animal?: Animal;

  getAnimal() {
    const id = Number(this.route.snapshot.paramMap.get("id"));
    this.listService.getItem(id).subscribe((animal) => (this.animal = animal));
  }

}
