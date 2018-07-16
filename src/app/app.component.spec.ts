import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SwSearchInputComponent } from './sw-search-input/sw-search-input.component';
import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        SwSearchInputComponent
      ],
      imports: [
        FormsModule,
        HttpClientModule
      ],
      schemas: [
        NO_ERRORS_SCHEMA,
      ]
    })//.compileComponents(); // no need for it here, maybe i will need it in more advanced tests. instead use createComponent()
  }));
  it('should create the app', async(() => {
    const fixture: ComponentFixture<AppComponent> = TestBed.createComponent(AppComponent);// fixture : a wrapper for component that's used in testing and has a few other properties 
    const app = fixture.debugElement.componentInstance;
    console.log("app from tests ", app);

    expect(app).toBeTruthy();
  }));
  // it(`should have as title 'app'`, async(() => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.debugElement.componentInstance;
  //   expect(app.title).toEqual('app');
  // }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Star Wars Finder');
  }));
});
