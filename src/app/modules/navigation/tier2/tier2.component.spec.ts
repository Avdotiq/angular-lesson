import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tier2Component } from './tier2.component';

describe('Tier2Component', () => {
  let component: Tier2Component;
  let fixture: ComponentFixture<Tier2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tier2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tier2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
