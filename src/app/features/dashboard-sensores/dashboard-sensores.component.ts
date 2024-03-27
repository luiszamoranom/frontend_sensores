import {Component, inject, OnInit} from '@angular/core';
import {HumedadService} from "../../services/humedad.service";
import {LuminosidadService} from "../../services/luminosidad.service";
import {TemperaturaService} from "../../services/temperatura.service";

@Component({
  selector: 'app-dashboard-sensores',
  standalone: true,
  imports: [],
  templateUrl: './dashboard-sensores.component.html',
  styleUrl: './dashboard-sensores.component.css'
})
export class DashboardSensoresComponent implements OnInit{
  private _humedadService = inject(HumedadService)
  private _luminosidadService = inject(LuminosidadService)
  private _temperaturaService = inject(TemperaturaService)

  ngOnInit() {
  }
}
