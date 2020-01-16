/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HomeClientComponent } from './home-client.component';

describe('HomeComponent', () => {
  let component: HomeClientComponent;
  let fixture: ComponentFixture<HomeClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
