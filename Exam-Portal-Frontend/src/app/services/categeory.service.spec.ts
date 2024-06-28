import { TestBed } from '@angular/core/testing';

import { CategeoryService } from './categeory.service';

describe('CategeoryService', () => {
  let service: CategeoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategeoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
