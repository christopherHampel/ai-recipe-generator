import { TestBed } from '@angular/core/testing';

import { N8nCommunicationService } from './n8n-communication.service';

describe('N8nCommunicationService', () => {
  let service: N8nCommunicationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(N8nCommunicationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
