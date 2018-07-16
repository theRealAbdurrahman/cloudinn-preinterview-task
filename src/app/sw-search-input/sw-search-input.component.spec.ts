import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwSearchInputComponent } from './sw-search-input.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { of } from 'rxjs';

describe('SwSearchInputComponent', () => {
    let component: SwSearchInputComponent;
    let fixture: ComponentFixture<SwSearchInputComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [SwSearchInputComponent],
            imports: [
                FormsModule,
                HttpClientModule
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
        // component = new SwSearchInputComponent(mockSwService);
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
    describe('getPeople()', () => {
        let mockSwService = jasmine.createSpyObj(['getPeople', 'getPlanet']);
        xit('should add people to searchResults arr ', () => {
            // mockSwService.getPeople.subscribe();
            mockSwService.getPeople.and.returnValue(of(true))
            component.searchResults = [];
            component.getPeople();
            expect(component.searchResults.length).toBeGreaterThan(0);
        });
        xit('should call getPeople() ', () => {
            // mockSwService.getPeople.subscribe();
            component.getPeople();
            mockSwService.getPeople.and.returnValue(of(true))
            expect(mockSwService.getPeople).toHaveBeenCalledWith(component.searchStr)

        });

    });

});
