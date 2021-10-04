import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interfaces';


@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [],
})
export class PorPaisComponent {
  termino: string = '';
  hayError: boolean = false;
  paises: Country[] = [];
  placeHolder:string='Buscar País...'

  constructor(private paisService: PaisService) {}

  buscar(termino: string) {
    this.hayError = false;
    console.log(termino);
    this.paisService.buscarPais(termino).subscribe(
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

  sugerencias(termino: string) {
    this.hayError = false;
  }
}
