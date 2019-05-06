import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SegbimestrePage } from './segbimestre.page';

describe('SegbimestrePage', () => {
  let component: SegbimestrePage;
  let fixture: ComponentFixture<SegbimestrePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SegbimestrePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SegbimestrePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
