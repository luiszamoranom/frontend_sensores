import {Component, inject, OnInit} from '@angular/core';
import {TemperaturaService} from "../../services/temperatura.service";
import {LuminosidadService} from "../../services/luminosidad.service";
import {ResponseAPI} from "../../dtos/ResponseAPI";
import {interval, Subject, takeUntil} from "rxjs";
import {TemperaturaComponent} from "../temperatura/temperatura.component";

@Component({
  selector: 'app-lista-temperatura',
  standalone: true,
  imports: [
    TemperaturaComponent
  ],
  templateUrl: './lista-temperatura.component.html',
  styleUrl: './lista-temperatura.component.css'
})
export class ListaTemperaturaComponent implements OnInit{
  private _temperaturaService = inject(TemperaturaService)

  protected temperaturas : ResponseAPI[] = []
  protected temperatura_masReciente: ResponseAPI|undefined = undefined
  protected temperatura_promedio: number|undefined = undefined
  protected temperatura_maxima: number|undefined = undefined
  protected temperatura_minima: number|undefined = undefined
  private destroy$ = new Subject<void>();

  ngOnInit() {
    interval(500).pipe(takeUntil(this.destroy$)).subscribe(() => {
      this._temperaturaService.fetchAll().subscribe(
        response => this.temperaturas = response
      )

      this._temperaturaService.fetchMasReciente().subscribe(
        response => this.temperatura_masReciente = response
      )

      this._temperaturaService.fetchPromedio().subscribe(
        response => this.temperatura_promedio = response
      )

      this._temperaturaService.fetchMaxima().subscribe(
        response => this.temperatura_maxima = response
      )

      this._temperaturaService.fetchMinimo().subscribe(
        response => this.temperatura_minima = response
      )
    })
  }
}
