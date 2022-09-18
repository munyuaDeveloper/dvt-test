import {Component, Input, OnInit} from '@angular/core';
import {Artist, Data} from '../../services/sharedInterface';

@Component({
  selector: 'app-artist-card',
  templateUrl: './artist-card.component.html',
  styleUrls: ['./artist-card.component.scss']
})
export class ArtistCardComponent implements OnInit {
  // tslint:disable-next-line:no-input-rename
  @Input('artist') artist!: Artist;

  constructor() { }

  ngOnInit(): void {
  }

}
