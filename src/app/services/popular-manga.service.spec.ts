import { TestBed } from '@angular/core/testing';

import { PopularMangaService } from './popular-manga.service';

describe('PopularMangaService', () => {
  let service: PopularMangaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PopularMangaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
