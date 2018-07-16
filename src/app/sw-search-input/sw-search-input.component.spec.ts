import { SwAPIService } from './../sw-api.service';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwSearchInputComponent } from './sw-search-input.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { of } from 'rxjs';
import { By } from '@angular/platform-browser';

describe('SwSearchInputComponent', () => {
    let component: SwSearchInputComponent;
    let fixture: ComponentFixture<SwSearchInputComponent>;
    let mockSwService = jasmine.createSpyObj(['getPeople', 'getPlanet']);


    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [SwSearchInputComponent],
            imports: [
                FormsModule,
                HttpClientModule
            ],
            providers: [
                { provide: SwAPIService, useValue: mockSwService }
            ],
            schemas: [
                NO_ERRORS_SCHEMA,
            ]
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
    it('should  render search div when search str is empty', async(() => {
        component.searchStr = ""
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('#search-for-char')).toBeDefined();
    }));
    it('should not render search div when search str is not empty', async(() => {
        component.searchStr = "test"
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('#search-for-char')).toBeNull();
    }));
    it('should  render yoda quote when search results are empty', async(() => {
        component.searchResults.length = 0;
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('#yoda-quote')).toBeDefined();
    }));
    it('should not render  yoda quote when search results are empty', async(() => {
        component.searchResults.length = 0;
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('#yoda-quote')).toBeNull();
    }));
    it('should render a form', () => {
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('form')).toBeDefined();
    });
    it('should render the results when searchStr is longer than 0', () => {
        const compiled = fixture.debugElement.nativeElement;
        component.searchStr.length > 0;
        expect(compiled.querySelector('.search-results')).toBeDefined()

    });
    it('should not render the results when searchStr is  0', () => {
        const compiled = fixture.debugElement.nativeElement;
        component.searchStr = '';
        expect(compiled.querySelector('.search-results')).toBeNull()

    });
    describe('search results', () => {
        it('should have scrollablejs directive', () => {
            const compiled = fixture.debugElement;
            expect(compiled.query(By.directive('sortablejs'))).toBeDefined();
        });
    });
    describe('Search Input -> getPeople()', () => {
        it('should add people to searchResults arr ', () => {
            // mockSwService.getPeople.subscribe();
            component.searchResults = [];
            mockSwService.getPeople.and.returnValue(of([
                {
                    name: 'luke',
                    url: 'test.com/url',
                    height: 100,
                    homeworld: 'Tatooine'
                }
            ]));
            component.getPeople();
            fixture.detectChanges()
            expect(component.searchResults.length).toBeGreaterThan(0);
        });
        it('should call getPeople() ', () => {
            component.getPeople();
            mockSwService.getPeople.and.returnValue(of(true))
            expect(mockSwService.getPeople).toHaveBeenCalledWith(component.searchStr)

        });

    });

});
