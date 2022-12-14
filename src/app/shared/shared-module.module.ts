import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainNavbarComponent } from './components/main-navbar/main-navbar.component';
import { ArtistCardComponent } from './components/artist-card/artist-card.component';
import { AlbumCardComponent } from './components/album-card/album-card.component';
import {NgbTypeaheadModule} from "@ng-bootstrap/ng-bootstrap";
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    MainNavbarComponent,
    ArtistCardComponent,
    AlbumCardComponent
  ],
  exports: [
    MainNavbarComponent,
    ArtistCardComponent,
    AlbumCardComponent
  ],
  imports: [
    CommonModule,
    NgbTypeaheadModule,
    FormsModule
  ]
})
export class SharedModuleModule { }
