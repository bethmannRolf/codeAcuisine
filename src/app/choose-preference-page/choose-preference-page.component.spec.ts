import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoosePreferencePageComponent } from './choose-preference-page.component';

describe('ChoosePreferencePageComponent', () => {
  let component: ChoosePreferencePageComponent;
  let fixture: ComponentFixture<ChoosePreferencePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChoosePreferencePageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChoosePreferencePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
