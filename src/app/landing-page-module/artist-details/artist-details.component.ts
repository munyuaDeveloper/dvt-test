import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-artist-details',
  templateUrl: './artist-details.component.html',
  styleUrls: ['./artist-details.component.scss']
})
export class ArtistDetailsComponent implements OnInit {
  albums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  constructor() { }

  ngOnInit(): void {
  }

}
