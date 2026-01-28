import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngrediantsDirectionsBoxComponent } from './ingrediants-directions-box.component';

describe('IngrediantsDirectionsBoxComponent', () => {
  let component: IngrediantsDirectionsBoxComponent;
  let fixture: ComponentFixture<IngrediantsDirectionsBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IngrediantsDirectionsBoxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IngrediantsDirectionsBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
