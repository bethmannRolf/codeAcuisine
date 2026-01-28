import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngrediantsDetailBoxComponent } from './ingrediants-detail-box.component';

describe('IngrediantsDetailBoxComponent', () => {
  let component: IngrediantsDetailBoxComponent;
  let fixture: ComponentFixture<IngrediantsDetailBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IngrediantsDetailBoxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IngrediantsDetailBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
