import { Component, OnInit, Input } from '@angular/core';
import { Country } from '../models/country';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() country: Country

  constructor() { }

  ngOnInit(): void {
  }

}
