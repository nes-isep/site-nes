import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubBannerMaterialComponent } from './sub-banner-material.component';

describe('SubBannerMaterialComponent', () => {
  let component: SubBannerMaterialComponent;
  let fixture: ComponentFixture<SubBannerMaterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubBannerMaterialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubBannerMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
