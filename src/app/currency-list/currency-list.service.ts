import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import { env } from '../../environments/enviroment';
import { CurrencyListComponent } from './currency-list.component';
import { Currency } from './currency-list.model';

@Injectable({providedIn:'root'})
export class CurrencyListService {
  listUrl = env.countryListURL;

  constructor(private httpClient: HttpClient) {}

  getCountryList(): Observable<Currency[]> {
    return this.httpClient
      .get<{ countries: { country: Currency[] } }>(this.listUrl)
      .pipe(
        map((response) =>
          response.countries.country.map((country) => {
            return new Currency(country);
          })
        ),
        catchError(() => {
          throw new Error('error');
        })
      );
  }
}
