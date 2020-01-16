/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EditCampComponent } from './edit-camp.component';

describe('IconsComponent', () => {
  let component: EditCampComponent;
  let fixture: ComponentFixture<EditCampComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditCampComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCampComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
