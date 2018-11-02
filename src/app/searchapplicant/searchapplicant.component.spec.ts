import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchapplicantComponent } from './searchapplicant.component';

describe('SearchapplicantComponent', () => {
  let component: SearchapplicantComponent;
  let fixture: ComponentFixture<SearchapplicantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchapplicantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchapplicantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
