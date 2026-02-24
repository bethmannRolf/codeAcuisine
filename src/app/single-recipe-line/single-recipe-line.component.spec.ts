import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleRecipeLineComponent } from './single-recipe-line.component';

describe('SingleRecipeLineComponent', () => {
  let component: SingleRecipeLineComponent;
  let fixture: ComponentFixture<SingleRecipeLineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingleRecipeLineComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleRecipeLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
