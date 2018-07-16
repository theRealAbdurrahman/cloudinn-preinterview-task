import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Url } from 'url';


@Injectable({
  providedIn: 'root'
})
export class SwAPIService {
  baseUrl: string = ' https://swapi.co/api'

  constructor(private http: HttpClient) { }

  /**
   * @description sends GEt request to SWAPI to search for SW characters.
   * @param searchStr the query paramter
   */
  getPeople(searchStr) {
    return this.http.get(`${this.baseUrl}/people/?search=${searchStr}`);
  }


  /**
   * @description functions takes the endpoint url of the homeworld and make a GET request to get it's info from SWAPI;
   * @param homeworldURL the endpoint URL of the homeworld
   */
  getPlanet(homeworldURL: string) {
    return this.http.get(homeworldURL)
  }
}
