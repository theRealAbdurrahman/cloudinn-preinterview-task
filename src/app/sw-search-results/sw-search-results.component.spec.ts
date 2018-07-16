import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { SwSearchResultsComponent } from './sw-search-results.component';
import { FormsModule } from '@angular/forms';
import { MatCardModule, MatFormFieldModule, MatInputModule, MatIconModule, MatDividerModule } from '@angular/material';

describe('SwSearchResultsComponent', () => {
    let component: SwSearchResultsComponent;
    let fixture: ComponentFixture<SwSearchResultsComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [SwSearchResultsComponent],
            imports: [
                FormsModule,
                BrowserAnimationsModule,
                MatCardModule,
                MatFormFieldModule,
                MatInputModule,
                MatIconModule,
                MatDividerModule,
            ],
            schemas: [
                NO_ERRORS_SCHEMA,
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SwSearchResultsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        component.result = {
            name: 'luke',
            url: 'test.com/url',
            height: 100,
            homeworld: 'Tatooine'
        }
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
    it('should render mat-card', async(() => {
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('mat-card')).toBeDefined();
    }));
    it('should render the character name in mat-card-title', () => {
        const compiled = fixture.debugElement.nativeElement;
        fixture.detectChanges();
        expect(compiled.querySelector('mat-card-title').textContent).toContain(component.result.name);
    });
    it('should render the character url in mat-card-content', async(() => {
        const compiled = fixture.debugElement.nativeElement;
        fixture.detectChanges();
        expect(compiled.querySelector('mat-card-content').textContent).toContain(component.result.url);
    }));
    it('should render the character height in mat-card-content', async(() => {
        const compiled = fixture.debugElement.nativeElement;
        fixture.detectChanges();
        expect(compiled.querySelector('mat-card-content').textContent).toContain(component.result.height);
    }));
    it('should render the character homeworld in mat-card-content', async(() => {
        const compiled = fixture.debugElement.nativeElement;
        fixture.detectChanges();
        expect(compiled.querySelector('mat-card-content').textContent).toContain(component.result.homeworld);
    }));
});
