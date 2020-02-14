import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRemoveBuyerComponent } from './add-remove-buyer.component';

describe('AddRemoveBuyerComponent', () => {
  let component: AddRemoveBuyerComponent;
  let fixture: ComponentFixture<AddRemoveBuyerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddRemoveBuyerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRemoveBuyerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
