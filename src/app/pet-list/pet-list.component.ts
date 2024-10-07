import { Component, OnInit } from '@angular/core';
import { PetService } from '../services/pet.service';
import { Pet } from '../model/pet';

@Component({
  selector: 'app-pet-list',
  templateUrl: './pet-list.component.html',
  styleUrls: ['./pet-list.component.sass']
})
export class PetListComponent implements OnInit {

  pets: Pet[] = [];
  showModal: boolean = false;
  modalType: 'adopt' | 'favorite' | null = null; // Define o tipo da modal

  constructor(private petService: PetService) { }

  ngOnInit(): void {
    this.petService.getPets().subscribe((data: Pet[]) => {
      this.pets = data.map(pet => ({ ...pet, isFavorite: false }));
    });
  }

  adoptPet(): void {
    this.showModal = true;
    this.modalType = 'adopt';
  }

  closeModal(): void {
    this.showModal = false;
    this.modalType = null;
  }

  favoriteImage(pet: Pet): void {
    pet.isFavorite = !pet.isFavorite;

    if (pet.isFavorite) {
      this.showModal = true;
      this.modalType = 'favorite';
    }
  }
}
