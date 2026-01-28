import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CookbookCountryBoxComponent } from './cookbook-country-box.component';

describe('CookbookCountryBoxComponent', () => {
  let component: CookbookCountryBoxComponent;
  let fixture: ComponentFixture<CookbookCountryBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CookbookCountryBoxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CookbookCountryBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
