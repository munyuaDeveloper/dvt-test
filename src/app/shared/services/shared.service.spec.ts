import { TestBed } from '@angular/core/testing';

import { SharedService } from './shared.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {HttpClientModule} from "@angular/common/http";

describe('SharedService', () => {
  // We declare the variables that we'll use for the Test Controller and for our Service
  let httpTestingController: HttpTestingController;
  let service: SharedService;


  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SharedService, HttpClientModule, HttpClientTestingModule],
      imports: [HttpClientTestingModule],
    });

    // We inject our service (which imports the HttpClient) and the Test Controller
    httpTestingController = TestBed.get(HttpTestingController);
    service = TestBed.get(SharedService);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    const sharedService: SharedService = TestBed.get(SharedService);
    expect(sharedService).toBeTruthy();
  });
});
