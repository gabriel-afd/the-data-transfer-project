import { TestBed } from '@angular/core/testing';

import { DatabasesTypesService } from './databases-types.service';

describe('DatabasesTypesService', () => {
  let service: DatabasesTypesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatabasesTypesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
