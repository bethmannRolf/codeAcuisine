import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipePreviewBoxComponent } from './recipe-preview-box.component';

describe('RecipePreviewBoxComponent', () => {
  let component: RecipePreviewBoxComponent;
  let fixture: ComponentFixture<RecipePreviewBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecipePreviewBoxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecipePreviewBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
