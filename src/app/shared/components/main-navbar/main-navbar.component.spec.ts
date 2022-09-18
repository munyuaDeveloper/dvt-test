import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainNavbarComponent } from './main-navbar.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {HttpClientModule} from "@angular/common/http";
import {StoreModule} from "@ngrx/store";
import {ArtistReducer} from "../../../store/reducer";
import {RouterModule} from "@angular/router";
import {RouterTestingModule} from "@angular/router/testing";

describe('MainNavbarComponent', () => {
  let component: MainNavbarComponent;
  let fixture: ComponentFixture<MainNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainNavbarComponent ],
      // @ts-ignore
      imports: [HttpClientModule, RouterTestingModule, StoreModule.forRoot({ artist: ArtistReducer })],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
