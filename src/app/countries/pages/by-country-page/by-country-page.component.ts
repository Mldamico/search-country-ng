import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: [],
})
export class ByCountryPageComponent implements OnInit {
  countries: Country[] = [];
  constructor(private countriesService: CountriesService) {}

  ngOnInit(): void {}

  searchByCountry(term: string) {
    this.countriesService.searchBy(term, 'name').subscribe((countries) => {
      console.log(countries);
      this.countries = countries as Country[];
    });
  }
}
