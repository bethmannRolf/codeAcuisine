import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderTopGreenComponent } from './header-top-green.component';

describe('HeaderTopGreenComponent', () => {
  let component: HeaderTopGreenComponent;
  let fixture: ComponentFixture<HeaderTopGreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderTopGreenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderTopGreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
