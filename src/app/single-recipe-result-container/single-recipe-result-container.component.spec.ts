import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleRecipeResultContainerComponent } from './single-recipe-result-container.component';

describe('SingleRecipeResultContainerComponent', () => {
  let component: SingleRecipeResultContainerComponent;
  let fixture: ComponentFixture<SingleRecipeResultContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingleRecipeResultContainerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleRecipeResultContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
