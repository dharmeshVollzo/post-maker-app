import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BusinessDetailsPage } from './business-details.page';

describe('BusinessDetailsPage', () => {
  let component: BusinessDetailsPage;
  let fixture: ComponentFixture<BusinessDetailsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BusinessDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
