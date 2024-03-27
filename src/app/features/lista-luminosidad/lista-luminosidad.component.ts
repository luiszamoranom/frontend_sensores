import {Component, inject, OnInit} from '@angular/core';
import {LuminosidadService} from "../../services/luminosidad.service";

@Component({
  selector: 'app-lista-luminosidad',
  standalone: true,
  imports: [],
  templateUrl: './lista-luminosidad.component.html',
  styleUrl: './lista-luminosidad.component.css'
})
export class ListaLuminosidadComponent implements OnInit{
  private _luminosidadService = inject(LuminosidadService)

  ngOnInit() {
  }
}
