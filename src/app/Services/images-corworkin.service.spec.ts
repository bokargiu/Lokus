import { TestBed } from '@angular/core/testing';

import { ImagesCorworkinService } from './images-corworkin.service';

describe('ImagesCorworkinService', () => {
  let service: ImagesCorworkinService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImagesCorworkinService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
