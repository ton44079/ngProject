import { Component, OnInit } from '@angular/core';
import { CountryService } from '../services/country.service';
import { Country } from '../models/country';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {
  countries: Country[]
  constructor(private countryService: CountryService) { }

  ngOnInit(): void {
    this.getCountries();
  }

  getCountries(): void {
    this.countryService.getCountries()
      .subscribe(countries => this.countries = countries);
  }
}
