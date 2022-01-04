import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoPopupComponent } from './logo-popup.component';

describe('LogoPopupComponent', () => {
  let component: LogoPopupComponent;
  let fixture: ComponentFixture<LogoPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogoPopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
