import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeResultsPageComponent } from './recipe-results-page.component';

describe('RecipeResultsPageComponent', () => {
  let component: RecipeResultsPageComponent;
  let fixture: ComponentFixture<RecipeResultsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecipeResultsPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecipeResultsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
