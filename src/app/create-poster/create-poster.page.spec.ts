import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreatePosterPage } from './create-poster.page';

describe('CreatePosterPage', () => {
  let component: CreatePosterPage;
  let fixture: ComponentFixture<CreatePosterPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CreatePosterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
