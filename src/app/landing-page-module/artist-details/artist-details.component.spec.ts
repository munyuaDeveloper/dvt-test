import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistDetailsComponent } from './artist-details.component';
import {ActivatedRoute} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import {StoreModule} from "@ngrx/store";
import {ArtistReducer} from "../../store/reducer";
import {RouterTestingModule} from "@angular/router/testing";

describe('ArtistDetailsComponent', () => {
  let component: ArtistDetailsComponent;
  let fixture: ComponentFixture<ArtistDetailsComponent>;
  const fakeActivatedRoute = {
    snapshot: { data: { } }
  } as ActivatedRoute;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtistDetailsComponent ],
      // @ts-ignore
      imports: [HttpClientModule, RouterTestingModule, StoreModule.forRoot({ artist: ArtistReducer })],
      providers: [ {provide: ActivatedRoute, useValue: fakeActivatedRoute} ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
