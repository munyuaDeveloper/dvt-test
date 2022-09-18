import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {fromEvent, of} from 'rxjs';
import {debounceTime, distinctUntilChanged, map, filter} from 'rxjs/operators';
import {SharedService} from '../../services/shared.service';
import {DeezerApi} from '../../services/apis';
import { Data, SearchResults} from '../../services/sharedInterface';
import {Store} from '@ngrx/store';
import {StateModel} from '../../../store/reducer';
import {LoadArtists} from '../../../store/actions';
import {Router} from '@angular/router';

@Component({
  selector: 'app-main-navbar',
  templateUrl: './main-navbar.component.html',
  styleUrls: ['./main-navbar.component.scss']
})
export class MainNavbarComponent implements OnInit {
  @ViewChild('artistSearchInput', { static: true }) artistSearchInput!: ElementRef;
  @ViewChild('artistSearchInputMobile', { static: true }) artistSearchInputMobile!: ElementRef;
  apiResponse: any[] = [];
  isSearching!: boolean;
  showMobileSearch = false;

  constructor(
    private sharedService: SharedService,
    private store: Store<StateModel>,
    private router: Router
  ) {
    this.isSearching = false;
    this.apiResponse = [];
  }

  ngOnInit(): void {
    fromEvent(this.artistSearchInput.nativeElement, 'keyup').pipe(
      // get value
      map((event: any) => {
        return event.target.value;
      })
      // if character length greater then 2
      , filter(res => res.length > 2)

      // Time in milliseconds between key events
      , debounceTime(1000)

      // If previous query is different from current
      , distinctUntilChanged()

      // subscription for response
    ).subscribe((text: string) => {

      this.isSearching = true;

      this.searchGetCall(text).subscribe((res: SearchResults) => {
        this.isSearching = false;
        if (res.data.length > 0) {
          this.prepareData(res.data);
        }
      }, (err: any) => {
        this.isSearching = false;
      });
    });
  }

  searchGetCall(term: string): any {
    if (term === '') {
      return of([]);
    }
    return this.sharedService.getData(DeezerApi.search, { q: term});
  }

  prepareData(arr: Data[]): void {
    const data = [];
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < arr.length; i++) {
      data.push(arr[i].artist);
    }
    if (this.router.url !== '/') {
      this.router.navigateByUrl('/');
    }
    this.store.dispatch(new LoadArtists(data));
  }

  showMobilSearchBar(): void {
    this.showMobileSearch = !this.showMobileSearch;
  }
}
