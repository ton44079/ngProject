import { Component, OnInit } from '@angular/core';
import { Country } from '../models/country';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  country: Country = {
    name: 'Afghanistan',
    capital: 'Kabul',
    subregion: 'Southern Asia',
    population: 27657145
  }

  constructor() { }

  ngOnInit(): void {
  }

}
