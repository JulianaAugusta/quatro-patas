import { TestBed } from '@angular/core/testing';
import { PetService } from './pet.service';

describe('PetService', () => {
  let service: PetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return mock pets data', () => {
    service.getPets().subscribe((data) => {
      expect(data.length).toBe(3);
    });
  });
});
