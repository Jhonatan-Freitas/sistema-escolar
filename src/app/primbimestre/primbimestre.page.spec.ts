import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimbimestrePage } from './primbimestre.page';

describe('PrimbimestrePage', () => {
  let component: PrimbimestrePage;
  let fixture: ComponentFixture<PrimbimestrePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimbimestrePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimbimestrePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
