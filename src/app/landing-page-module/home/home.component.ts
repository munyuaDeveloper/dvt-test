import { Component, OnInit } from '@angular/core';
import {Artist, Data} from '../../shared/services/sharedInterface';
import {select, Store} from '@ngrx/store';
import {StateModel} from '../../store/reducer';
import {SharedService} from '../../shared/services/shared.service';
import {DeezerApi} from '../../shared/services/apis';
import {LoadAlbums, LoadArtists} from '../../store/actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  artists: Artist[] = [];
  constructor( private store: Store<StateModel>, private sharedService: SharedService) {
  }

  ngOnInit(): void {
    this.getArtists();
    // @ts-ignore
    this.store.pipe(select('artist')).subscribe((data: any) => {
      this.artists = data.artists;
    });
  }
  getArtists(): void {
    this.sharedService.getData(DeezerApi.genre).subscribe((res: any) => {
      this.artists = res.data;
      // this.store.dispatch(new LoadArtists(this.artists));
    });
  }
}
