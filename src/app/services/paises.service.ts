import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { URL_PAISES } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  constructor(private http: HttpClient) { }

  getPaises(){
    //const url = "https://restcountries.eu/rest/v2/all";
   /* this.http
      .get(url)
      .subscribe(paises => {
      console.log(paises);
    });*/
    return this.http.get(URL_PAISES);

  }
}
