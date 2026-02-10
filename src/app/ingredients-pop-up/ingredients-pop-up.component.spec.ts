import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngredientsPopUpComponent } from './ingredients-pop-up.component';

describe('IngredientsPopUpComponent', () => {
  let component: IngredientsPopUpComponent;
  let fixture: ComponentFixture<IngredientsPopUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IngredientsPopUpComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IngredientsPopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
