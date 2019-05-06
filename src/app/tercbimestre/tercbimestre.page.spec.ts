import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TercbimestrePage } from './tercbimestre.page';

describe('TercbimestrePage', () => {
  let component: TercbimestrePage;
  let fixture: ComponentFixture<TercbimestrePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TercbimestrePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TercbimestrePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
