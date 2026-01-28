import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateRecipePageComponent } from './generate-recipe-page.component';

describe('GenerateRecipePageComponent', () => {
  let component: GenerateRecipePageComponent;
  let fixture: ComponentFixture<GenerateRecipePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GenerateRecipePageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenerateRecipePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
