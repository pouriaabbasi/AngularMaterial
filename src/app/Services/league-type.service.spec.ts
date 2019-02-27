import { TestBed } from '@angular/core/testing';

import { LeagueTypeService } from './league-type.service';

describe('LeagueTypeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LeagueTypeService = TestBed.get(LeagueTypeService);
    expect(service).toBeTruthy();
  });
});
