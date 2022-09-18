import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {SharedService} from "../../shared/services/shared.service";
import {select, Store} from "@ngrx/store";
import {StateModel} from "../../store/reducer";
import {DeezerApi} from "../../shared/services/apis";
import {Album, Artist} from "../../shared/services/sharedInterface";

@Component({
  selector: 'app-artist-details',
  templateUrl: './artist-details.component.html',
  styleUrls: ['./artist-details.component.scss']
})
export class ArtistDetailsComponent implements OnInit {
  artistId = '';
  topTracks: any[] = [];
  albums: Album[] = [];
  artistDetails!: Artist;
  constructor(private activeRouter: ActivatedRoute,
              private sharedService: SharedService,
              private store: Store<StateModel>) { }

  ngOnInit(): void {

    this.activeRouter.params.subscribe(param => {
      this.artistId = param.id;
    });

    this.getArtistDetails();
    this.getTopTracks();
    this.getTopAlbums();
  }

  getTopTracks(): void{
    this.sharedService.getData(`${DeezerApi.artist}/${this.artistId}/top?limit=10`).subscribe((res: any) => {
      this.topTracks = res.data;
    });
  }

  getTopAlbums(): void{
    this.sharedService.getData(`${DeezerApi.album}/${this.artistId}`).subscribe((res: any) => {
      this.albums = res.data;
    });
  }

  getArtistDetails(): void{
    this.sharedService.getData(`${DeezerApi.artist}/${this.artistId}`).subscribe((res: any) => {
      this.artistDetails = res;
    });
  }
}
