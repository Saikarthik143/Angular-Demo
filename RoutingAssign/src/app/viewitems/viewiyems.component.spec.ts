import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewiyemsComponent } from './viewiyems.component';

describe('ViewiyemsComponent', () => {
  let component: ViewiyemsComponent;
  let fixture: ComponentFixture<ViewiyemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewiyemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewiyemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
