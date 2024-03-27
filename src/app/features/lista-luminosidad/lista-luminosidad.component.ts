import {Component, inject, OnInit} from '@angular/core';
import {LuminosidadService} from "../../services/luminosidad.service";
import {ResponseAPI} from "../../dtos/ResponseAPI";
import {interval, Subject, takeUntil} from "rxjs";

@Component({
  selector: 'app-lista-luminosidad',
  standalone: true,
  imports: [],
  templateUrl: './lista-luminosidad.component.html',
  styleUrl: './lista-luminosidad.component.css'
})
export class ListaLuminosidadComponent implements OnInit{
  private _luminosidadService = inject(LuminosidadService)

  protected luminosidades : ResponseAPI[] = []
  protected luminosidad_masReciente: ResponseAPI|undefined = undefined
  protected luminosidad_promedio: number|undefined = undefined
  protected luminosidad_maxima: number|undefined = undefined
  protected humedad_minima: number|undefined = undefined
  private destroy$ = new Subject<void>();

  ngOnInit() {
    interval(500).pipe(takeUntil(this.destroy$)).subscribe(() => {
      this._luminosidadService.fetchAll().subscribe(
        response => this.luminosidades = response
      )

      this._luminosidadService.fetchMasReciente().subscribe(
        response => this.luminosidad_masReciente = response
      )

      this._luminosidadService.fetchPromedio().subscribe(
        response => this.luminosidad_promedio = response
      )

      this._luminosidadService.fetchMaxima().subscribe(
        response => this.luminosidad_maxima = response
      )

      this._luminosidadService.fetchMinimo().subscribe(
        response => this.humedad_minima = response
      )
    })
  }
}
