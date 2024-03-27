import {Component, inject, OnInit} from '@angular/core';
import {HumedadService} from "../../services/humedad.service";
import {JsonPipe} from "@angular/common";
import {ResponseAPI} from "../../dtos/ResponseAPI";

@Component({
  selector: 'app-lista-humedad',
  standalone: true,
  imports: [
    JsonPipe
  ],
  templateUrl: './lista-humedad.component.html',
  styleUrl: './lista-humedad.component.css'
})
export class ListaHumedadComponent implements OnInit{
  private _humedadService = inject(HumedadService)

  protected humedades : ResponseAPI[] = []
  protected humedad_masReciente: ResponseAPI|undefined = undefined
  protected humedad_promedio: number|undefined = undefined
  protected humedad_maxima: number|undefined = undefined
  protected humedad_minima: number|undefined = undefined

  ngOnInit() {
    this._humedadService.fetchAll().subscribe(
      response => this.humedades = response
    )

    this._humedadService.fetchMasReciente().subscribe(
      response => this.humedad_masReciente = response
    )

    this._humedadService.fetchPromedio().subscribe(
      response => this.humedad_promedio = response
    )

    this._humedadService.fetchMaxima().subscribe(
      response => this.humedad_maxima = response
    )

    this._humedadService.fetchMinimo().subscribe(
      response => this.humedad_minima = response
    )
  }
}
