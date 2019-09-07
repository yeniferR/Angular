import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';


@Injectable({
  providedIn: 'root'
})
export class DataApiService {

  constructor(private http: HttpClient) { }
  iso:Observable<any>;
  headers:HttpHeaders = new HttpHeaders({
    'Conten-Type': 'application/json; charset=utf-8' });

  getIso(id: string){
   const url_api = `https://restcountries.eu/rest/v2/alpha/${id}`;
   this.iso =this.http.get(url_api);
    return  this.iso;
  }



}
