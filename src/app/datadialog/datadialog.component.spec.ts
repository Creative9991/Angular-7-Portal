import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatadialogComponent } from './datadialog.component';

describe('DatadialogComponent', () => {
  let component: DatadialogComponent;
  let fixture: ComponentFixture<DatadialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatadialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatadialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});