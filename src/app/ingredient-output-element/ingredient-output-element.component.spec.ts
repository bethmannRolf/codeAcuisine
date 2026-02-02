import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngredientOutputElementComponent } from './ingredient-output-element.component';

describe('IngredientOutputElementComponent', () => {
  let component: IngredientOutputElementComponent;
  let fixture: ComponentFixture<IngredientOutputElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IngredientOutputElementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IngredientOutputElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
