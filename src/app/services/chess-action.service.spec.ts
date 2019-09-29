import { TestBed } from '@angular/core/testing';

import { ChessActionService } from './chess-action.service';

describe('ChessActionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ChessActionService = TestBed.get(ChessActionService);
    expect(service).toBeTruthy();
  });
});
