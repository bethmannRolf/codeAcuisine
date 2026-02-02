import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngredientInputElementComponent } from './ingredient-input-element.component';

describe('IngredientInputElementComponent', () => {
  let component: IngredientInputElementComponent;
  let fixture: ComponentFixture<IngredientInputElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IngredientInputElementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IngredientInputElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
