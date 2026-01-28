import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryPagePaginationComponent } from './country-page-pagination.component';

describe('CountryPagePaginationComponent', () => {
  let component: CountryPagePaginationComponent;
  let fixture: ComponentFixture<CountryPagePaginationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CountryPagePaginationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CountryPagePaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
