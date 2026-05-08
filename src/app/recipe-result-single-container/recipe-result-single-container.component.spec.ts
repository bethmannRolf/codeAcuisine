import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeResultSingleContainerComponent } from './recipe-result-single-container.component';

describe('RecipeResultSingleContainerComponent', () => {
  let component: RecipeResultSingleContainerComponent;
  let fixture: ComponentFixture<RecipeResultSingleContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecipeResultSingleContainerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecipeResultSingleContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
