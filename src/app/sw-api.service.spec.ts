// import { TestBed, inject } from '@angular/core/testing';

// import { SwAPIService } from './sw-api.service';

// describe('SwAPIService', () => {
//   let httpClientSpy: { get: jasmine.Spy };
//   let swService: SwAPIService;
//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       providers: [SwAPIService]
//     });
//     swService = TestBed.get(SwAPIService);
//     httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
//     swService = new SwAPIService(<any>httpClientSpy);

//   });

//   it('should be created', inject([SwAPIService], (service: SwAPIService) => {
//     expect(service).toBeTruthy();
//   }));
//   it('#getPeople() should return observable value', (done: DoneFn) => {

//     swService.getPeople("luke").subscribe(value => {
//       expect(value).toBe('observable value');
//       done();
//     });
//   })
// });
