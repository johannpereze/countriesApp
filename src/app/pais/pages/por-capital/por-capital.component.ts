import { Component} from '@angular/core';
import { Country } from '../../interfaces/pais.interfaces';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent{

  termino: string = '';
  hayError: boolean = false;
  paises: Country[] = [];
  placeHolder:string='Buscar Capital...'

  constructor(private paisService: PaisService) {}

  buscar(termino: string) {
    this.hayError = false;
    console.log(termino);
    this.paisService.buscarCapital(termino).subscribe(
      (paises) => {
        console.log(paises);
        this.paises = paises;
      },
      (err) => {
        this.hayError = true;
        this.paises = [];
        termino = '';
      }
    );
  }

}
