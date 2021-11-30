import { TestBed } from '@angular/core/testing';

import { GiftsService } from './gifts.service';

describe('GiftsService', () => {
  let service: GiftsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GiftsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
