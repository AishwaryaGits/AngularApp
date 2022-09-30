import { TestBed } from '@angular/core/testing';

import { CreateAlbumServiceService } from './create-album-service.service';

describe('CreateAlbumServiceService', () => {
  let service: CreateAlbumServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateAlbumServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
