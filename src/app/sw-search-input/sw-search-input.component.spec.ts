import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwSearchInputComponent } from './sw-search-input.component';

describe('SwSearchInputComponent', () => {
  let component: SwSearchInputComponent;
  let fixture: ComponentFixture<SwSearchInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwSearchInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwSearchInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
