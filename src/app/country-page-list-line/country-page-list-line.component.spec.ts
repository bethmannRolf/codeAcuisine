import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryPageListLineComponent } from './country-page-list-line.component';

describe('CountryPageListLineComponent', () => {
  let component: CountryPageListLineComponent;
  let fixture: ComponentFixture<CountryPageListLineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CountryPageListLineComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CountryPageListLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
