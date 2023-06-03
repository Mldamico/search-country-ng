import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: [],
})
export class ByRegionPageComponent implements OnInit {
  countries: Country[] = [];
  constructor(private countriesService: CountriesService) {}

  ngOnInit(): void {}

  searchByRegion(term: string) {
    this.countriesService.searchBy(term, 'region').subscribe((countries) => {
      this.countries = countries;
    });
  }
}
