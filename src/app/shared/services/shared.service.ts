import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {of} from 'rxjs';
import {map} from 'rxjs/operators';
import {environment} from '../../../environments/environment';
import {SearchResults} from './sharedInterface';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private baseUrl = environment.API_SERVICE_URL;


  constructor(private http: HttpClient) { }

  getData(url: string, param?: any): any {
    return this.http.get(this.baseUrl + url, {params: param});
  }

  // tslint:disable-next-line:typedef
  search(url: string, term: string) {
    if (term === '') {
      return of([]);
    }
    const params = {
      q: term
    };
    return this.http
      .get<SearchResults>(this.baseUrl + url, {params}).pipe(
        map(response => response.data)
      );
  }
}
