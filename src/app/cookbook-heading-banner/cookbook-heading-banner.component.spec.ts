import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CookbookHeadingBannerComponent } from './cookbook-heading-banner.component';

describe('CookbookHeadingBannerComponent', () => {
  let component: CookbookHeadingBannerComponent;
  let fixture: ComponentFixture<CookbookHeadingBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CookbookHeadingBannerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CookbookHeadingBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
