import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlternativepositionComponent } from './alternativeposition.component';

describe('AlternativepositionComponent', () => {
  let component: AlternativepositionComponent;
  let fixture: ComponentFixture<AlternativepositionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlternativepositionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlternativepositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
