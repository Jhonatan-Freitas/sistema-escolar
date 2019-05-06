import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuartbimestrePage } from './quartbimestre.page';

describe('QuartbimestrePage', () => {
  let component: QuartbimestrePage;
  let fixture: ComponentFixture<QuartbimestrePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuartbimestrePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuartbimestrePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
