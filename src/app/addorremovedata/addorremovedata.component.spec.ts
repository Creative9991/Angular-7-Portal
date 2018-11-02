import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddorremovedataComponent } from './addorremovedata.component';

describe('AddorremovedataComponent', () => {
  let component: AddorremovedataComponent;
  let fixture: ComponentFixture<AddorremovedataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddorremovedataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddorremovedataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
