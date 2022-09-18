import { Component, OnInit } from '@angular/core';
import {Observable, of, OperatorFunction} from 'rxjs';
import {catchError, debounceTime, distinctUntilChanged, map, tap, switchMap} from 'rxjs/operators';
import {Router} from '@angular/router';
import {SharedService} from '../../services/shared.service';
import {DeezerApi} from '../../services/apis';

@Component({
  selector: 'app-main-navbar',
  templateUrl: './main-navbar.component.html',
  styleUrls: ['./main-navbar.component.scss']
})
export class MainNavbarComponent implements OnInit {
  searching = false;
  searchFailed = false;
  searchKeyword!: string;

  constructor(
    private sharedService: SharedService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }
  search: OperatorFunction<string, readonly any[]> = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(400),
      distinctUntilChanged(),
      tap(() => this.searching = true),
      switchMap(term =>
        this.sharedService.search(DeezerApi.search, term).pipe(
          tap(() => this.searchFailed = false),
          catchError(() => {
            this.searchFailed = true;
            return of([]);
          }))
      ),
      tap(() => this.searching = false)
    )
  formatter = (x: {name: string}) => x.name;

  handleSearchSelection(event: any): void {
    this.router.navigate(['/artist/', event.item.id]);
  }
}
