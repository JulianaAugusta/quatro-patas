import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { PETS_DATA } from '../data/mock-pets';
@Injectable({
  providedIn: 'root',
})
export class PetService {
  constructor(private http: HttpClient) {}

  getPets(): Observable<any> {
    return of(PETS_DATA);
  }
}
