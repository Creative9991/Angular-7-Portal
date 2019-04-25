import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Datadialog1Component } from './datadialog1.component';

describe('Datadialog1Component', () => {
  let component: Datadialog1Component;
  let fixture: ComponentFixture<Datadialog1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Datadialog1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Datadialog1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
