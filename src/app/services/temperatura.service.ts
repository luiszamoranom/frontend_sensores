import {inject, Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {ResponseAPI} from "../dtos/ResponseAPI";

@Injectable({
  providedIn: 'root'
})
export class TemperaturaService {

  private httpCliente: HttpClient = inject(HttpClient)
  private baseUrl = 'http://35.239.216.31:5030/api/temperatura';

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    })
  };

  fetchAll(): Observable<ResponseAPI[]> {
    return this.httpCliente.get<any>(`${this.baseUrl}`, this.httpOptions)
  }
  fetchMasReciente(): Observable<ResponseAPI> {
    return this.httpCliente.get<any>(`${this.baseUrl}/mas_reciente`, this.httpOptions)
  }

  fetchPromedio(): Observable<number> {
    return this.httpCliente.get<any>(`${this.baseUrl}/promedio`, this.httpOptions)
  }

  fetchMaxima(): Observable<number> {
    return this.httpCliente.get<any>(`${this.baseUrl}/maxima`, this.httpOptions)
  }

  fetchMinimo(): Observable<number> {
    return this.httpCliente.get<any>(`${this.baseUrl}/minima`, this.httpOptions)
  }
}
