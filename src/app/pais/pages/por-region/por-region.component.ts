import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interfaces';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
    `
      button {
        margin-right: 5px;
      }
    `,
  ],
})
export class PorRegionComponent {
  constructor(private paisService: PaisService) {}

  regiones: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  regionActiva: string = '';
  paises: Country[] = [];

  getCSSClass(region: string): string {
    return region === this.regionActiva
      ? 'btn btn-primary'
      : 'btn btn-outline-primary';
  }

  activarRegion(region: string) {
    if (region === this.regionActiva) return;
    this.paises = [];
    this.regionActiva = region;
    this.buscarRegion(region);
  }

  buscarRegion(region: string) {
    this.paisService.buscarRegion(region).subscribe((paises) => {
      this.paises = paises;
      console.log(paises);
    });
  }
}
