import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  aproximarADosDecimales(numero: number|undefined): number|undefined {
    if(numero){
      return parseFloat((numero).toFixed(2));
    }
    return undefined
  }
}
