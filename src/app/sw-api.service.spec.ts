import { TestBed, inject } from '@angular/core/testing';

import { SwAPIService } from './sw-api.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('SwAPIService', () => {
    let httpClientSpy: { get: jasmine.Spy };
    let swService: SwAPIService;
    let httpTesting: HttpTestingController;
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [SwAPIService]
        });
        httpTesting = TestBed.get(HttpTestingController);
        swService = TestBed.get(SwAPIService);
        httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
        swService = new SwAPIService(<any>httpClientSpy);

    });

    it('should be created', inject([SwAPIService], (service: SwAPIService) => {
        expect(service).toBeTruthy();
    }));
    describe('getPeople()', () => {

        it('should make get request ', inject([SwAPIService, HttpTestingController], (swService: SwAPIService, httpTesting: HttpTestingController) => {
            swService.getPeople("luke").subscribe();
            let req = httpTesting.expectOne(' https://swapi.co/api/people/?search=luke');
            req.flush([
                {
                    name: 'luke',
                    url: 'test.com/url',
                    height: 100,
                    homeworld: 'Tatooine'
                }
            ])
            httpTesting.verify();
        }))
    });
    describe('getPlanet()', () => {

        it('should make get request', inject([SwAPIService, HttpTestingController], (swService: SwAPIService, httpTesting: HttpTestingController) => {
            swService.getPeople("luke").subscribe();
            let req = httpTesting.expectOne('https://swapi.co/api/planets/20/');
            req.flush({ "name": "Stewjon", "rotation_period": "unknown", "orbital_period": "unknown", "diameter": "0", "climate": "temperate", "gravity": "1 standard", "terrain": "grass", "surface_water": "unknown", "population": "unknown", "residents": ["https://swapi.co/api/people/10/"], "films": [], "created": "2014-12-10T16:16:26.566000Z", "edited": "2014-12-20T20:58:18.452000Z", "url": "https://swapi.co/api/planets/20/" })
            httpTesting.verify();
        }))
    });
});
