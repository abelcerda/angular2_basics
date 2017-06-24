import { TestBed, inject } from '@angular/core/testing';

import { CommonLabelsService } from './common-labels.service';

describe('CommonLabelsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CommonLabelsService]
    });
  });

  it('should be created', inject([CommonLabelsService], (service: CommonLabelsService) => {
    expect(service).toBeTruthy();
  }));
});
