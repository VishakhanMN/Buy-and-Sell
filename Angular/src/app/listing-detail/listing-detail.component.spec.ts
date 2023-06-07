import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingDetailComponent } from './listing-detail.component';

describe('ListingDetailComponent', () => {
  let component: ListingDetailComponent;
  let fixture: ComponentFixture<ListingDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListingDetailComponent]
    });
    fixture = TestBed.createComponent(ListingDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
