import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SwAPIService {
  baseUrl: string = ' https://swapi.co/api/people/?search=sky'

  constructor(private http: HttpClient) { }
  getPeople() {
    return this.http.get(this.baseUrl);
  }
}
