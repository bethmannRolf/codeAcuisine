import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngrediantsNutritionBoxComponent } from './ingrediants-nutrition-box.component';

describe('IngrediantsNutritionBoxComponent', () => {
  let component: IngrediantsNutritionBoxComponent;
  let fixture: ComponentFixture<IngrediantsNutritionBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IngrediantsNutritionBoxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IngrediantsNutritionBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
