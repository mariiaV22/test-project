import { inject, TestBed } from '@angular/core/testing';
import { IData } from '../shared/interfaces/data';

import { DataService } from './data.service';

describe('DataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataService]
    });
  });

  it('should be created', inject([DataService], (service: DataService) => {
    expect(service).toBeTruthy();
  }));

  it('should getTimeRanges',inject([DataService], (service: DataService) => {
    const responceMock: IData[] = [{time: 11,
      value: 'string'}];

    spyOn(service, 'getTimeRanges').and.returnValue(responceMock);
    expect(service.getTimeRanges).toBeTruthy();
  }));
});
