import {Component, inject} from '@angular/core';
import {TemperaturaService} from "../../services/temperatura.service";
import {ResponseAPI} from "../../dtos/ResponseAPI";
import {interval, Subject, takeUntil} from "rxjs";

@Component({
  selector: 'app-temperatura',
  standalone: true,
  imports: [],
  templateUrl: './temperatura.component.html',
  styleUrl: './temperatura.component.css'
})
export class TemperaturaComponent {
  protected _temperaturaService = inject(TemperaturaService)

  protected temperatura_masReciente: ResponseAPI|undefined = undefined
  protected temperatura_promedio: number|undefined = undefined
  protected temperatura_maxima: number|undefined = undefined
  protected temperatura_minima: number|undefined = undefined
  private destroy$ = new Subject<void>();

  ngOnInit() {
    interval(500).pipe(takeUntil(this.destroy$)).subscribe(() => {

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
