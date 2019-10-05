import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';


@Injectable({
  providedIn: 'root'
})
export class DataApiService {

  constructor(private http: HttpClient) { }
  iso:Observable<any>;
  bdApi:Observable<any>;
  headers:HttpHeaders = new HttpHeaders({
    'Conten-Type': 'application/json; charset=utf-8' });

  getIso(){
   const url_api = `https://restcountries.eu/rest/v2/all`;
   this.iso =this.http.get(url_api);
    return  this.iso;
  }

  getForm(capturaID:number,
    capturaProduct:string,
    CaracteristicasProduct:string,
    capturaFecha:string,
    capturaCorreo:string,
    datanombre:string,
    capturaPrecio:number,
    capturaDisponibles:number,
    capturaVendidas:number){
   
    
    const url_apiDB = `http://localhost:2827/Productos/Registro de productos?Result=${capturaID}&Result2=${capturaProduct}&Result3=${CaracteristicasProduct}&Result4=${capturaFecha}&Result5=${capturaCorreo}&Result6=${datanombre}&Result7=${capturaPrecio}&Result8=${capturaDisponibles}&Result9=${capturaVendidas}`;
   this.bdApi =this.http.get(url_apiDB);
    return  this.bdApi;

    
  }



}
