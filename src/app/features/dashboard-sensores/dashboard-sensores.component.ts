import {Component, inject, OnInit} from '@angular/core';
import {HumedadService} from "../../services/humedad.service";
import {LuminosidadService} from "../../services/luminosidad.service";
import {TemperaturaService} from "../../services/temperatura.service";
import {TemperaturaComponent} from "../temperatura/temperatura.component";
import {HumedadComponent} from "../humedad/humedad.component";
import {LuminocidadComponent} from "../luminocidad/luminocidad.component";

@Component({
  selector: 'app-dashboard-sensores',
  standalone: true,
  imports: [
    TemperaturaComponent,
    HumedadComponent,
    LuminocidadComponent
  ],
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
