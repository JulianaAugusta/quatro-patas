import { Component } from '@angular/core';
import { PetService } from '../services/pet.service';

@Component({
  selector: 'app-pet-list',
  templateUrl: './pet-list.component.html',
  styleUrls: ['./pet-list.component.sass']
})
export class PetListComponent {

  pets: any[] = [];
  showModalAdopt: boolean = false;
  showModalFavorite: boolean = false;

  constructor(private petService: PetService) { }

  ngOnInit(): void {
    this.petService.getPets().subscribe((data) => {
      this.pets = data;
    });
  }

  adoptPet(): void {
    this.showModalAdopt = true;
  }

  closeModalAdopt(): void {
    this.showModalAdopt = false;
  }

  favoriteImage(): void {
    this.showModalFavorite = true;
  }

  closeModalFavorite(): void {
    this.showModalFavorite = false;
  }
}
