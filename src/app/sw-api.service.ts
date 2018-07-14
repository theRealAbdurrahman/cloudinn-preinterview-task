import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SwAPIService {
  baseUrl: string = ' https://swapi.co/api'

  constructor(private http: HttpClient) { }
  getPeople(searchStr) {
    return this.http.get(`${this.baseUrl}/people/?search=${searchStr}`);
  }
  getPlanet(id) {
    return this.http.get(id)
  }
}
