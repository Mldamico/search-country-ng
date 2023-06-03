import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: [],
})
export class ByRegionPageComponent implements OnInit {
  countries: Country[] = [];
  public regions: Region[] = [
    'Africa',
    'Americas',
    'Asia',
    'Europe',
    'Oceania',
  ];
  public selectedRegion?: Region;
  constructor(private countriesService: CountriesService) {}

  ngOnInit(): void {}

  searchByRegion(term: Region) {
    this.selectedRegion = term;
    this.countriesService.searchBy(term, 'region').subscribe((countries) => {
      this.countries = countries as Country[];
    });
  }
}
