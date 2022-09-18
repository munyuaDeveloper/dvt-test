import {Component, Input, OnInit} from '@angular/core';
import {Album, Artist} from '../../services/sharedInterface';

@Component({
  selector: 'app-album-card',
  templateUrl: './album-card.component.html',
  styleUrls: ['./album-card.component.scss']
})
export class AlbumCardComponent implements OnInit {
  // tslint:disable-next-line:no-input-rename
  @Input('album') album!: Album;
  constructor() { }

  ngOnInit(): void {
  }

}
