import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRemoveSellerComponent } from './add-remove-seller.component';

describe('AddRemoveSellerComponent', () => {
  let component: AddRemoveSellerComponent;
  let fixture: ComponentFixture<AddRemoveSellerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddRemoveSellerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRemoveSellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
