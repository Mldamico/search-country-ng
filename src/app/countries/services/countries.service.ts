import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Country } from '../interfaces/country';
import { Observable, catchError, of, map } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CountriesService {
  private apiUrl: string = 'https://restcountries.com/v3.1';
  constructor(private httpClient: HttpClient) {}

  searchBy(
    term: string,
    filter: string = 'capital'
  ): Observable<Country[] | Country | null> {
    return this.httpClient
      .get<Country[]>(`${this.apiUrl}/${filter}/${term}`)
      .pipe(
        map((countries) => {
          if (countries.length > 0 && filter !== 'alpha') {
            return countries;
          } else if (countries.length == 1 && filter == 'alpha') {
            return countries[0];
          } else {
            return null;
          }
        }),
        catchError((error) => of([]))
      );
  }
}
