import { TestBed } from '@angular/core/testing';

import { MedicalService } from './medical.service';

describe('MedicalService', () => {
  let service: MedicalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MedicalService);
  });

  it('Hello', () => {
    expect(service).toBeTruthy();
  });
});
