import {Component, inject, OnInit} from '@angular/core';
import {TemperaturaService} from "../../services/temperatura.service";

@Component({
  selector: 'app-lista-temperatura',
  standalone: true,
  imports: [],
  templateUrl: './lista-temperatura.component.html',
  styleUrl: './lista-temperatura.component.css'
})
export class ListaTemperaturaComponent implements OnInit{
  private _temperaturaService = inject(TemperaturaService)

  ngOnInit() {
  }
}
