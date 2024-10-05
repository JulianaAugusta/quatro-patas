import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PETS_DATA } from '../data/mock-pets';
@Injectable({
  providedIn: 'root',
})
export class PetService {
  constructor() {}

  getPets(): Observable<any> {
    return of(PETS_DATA);
  }
}
