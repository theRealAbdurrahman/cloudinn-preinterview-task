import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwSearchResultsComponent } from './sw-search-results.component';

describe('SwSearchResultsComponent', () => {
  let component: SwSearchResultsComponent;
  let fixture: ComponentFixture<SwSearchResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwSearchResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwSearchResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
