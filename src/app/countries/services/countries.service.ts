import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Country } from '../interfaces/country';
import { Observable, catchError, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CountriesService {
  private apiUrl: string = 'https://restcountries.com/v3.1';
  constructor(private httpClient: HttpClient) {}

  searchBy(term: string, filter: string = 'capital'): Observable<Country[]> {
    return this.httpClient
      .get<Country[]>(`${this.apiUrl}/${filter}/${term}`)
      .pipe(catchError((error) => of([])));
  }
}
