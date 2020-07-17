import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Country } from '../models/country';
import { CardComponent } from './card.component';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CardComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    let country: Country = {
      name: "Thailand",
      capital: "Bangkokg",
      subregion: "South-Eastern Asia",
      population: 65327652
    }
    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    component.country = country

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
