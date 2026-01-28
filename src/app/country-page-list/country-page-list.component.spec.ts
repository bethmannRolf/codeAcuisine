import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryPageListComponent } from './country-page-list.component';

describe('CountryPageListComponent', () => {
  let component: CountryPageListComponent;
  let fixture: ComponentFixture<CountryPageListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CountryPageListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CountryPageListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
