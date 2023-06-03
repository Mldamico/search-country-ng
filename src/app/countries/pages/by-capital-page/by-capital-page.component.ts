import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: [],
})
export class ByCapitalPageComponent implements OnInit {
  countries: Country[] = [];
  isLoading: boolean = false;
  constructor(private countriesService: CountriesService) {}

  ngOnInit(): void {}

  searchByCapital(term: string) {
    this.isLoading = true;
    this.countriesService.searchBy(term, 'capital').subscribe((countries) => {
      this.countries = countries as Country[];
      this.isLoading = false;
    });
  }
}
