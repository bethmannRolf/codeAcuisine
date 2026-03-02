import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CookbokSingleSlideComponent } from './cookbok-single-slide.component';

describe('CookbokSingleSlideComponent', () => {
  let component: CookbokSingleSlideComponent;
  let fixture: ComponentFixture<CookbokSingleSlideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CookbokSingleSlideComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CookbokSingleSlideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
