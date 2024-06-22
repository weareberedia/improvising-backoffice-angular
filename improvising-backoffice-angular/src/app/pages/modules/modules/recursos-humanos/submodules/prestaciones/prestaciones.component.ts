import { Component } from '@angular/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';

interface Benefits {
  id: number,
  description: string;
}

@Component({
  selector: 'prestaciones-component',
  standalone: true,
  imports: [
    MatTooltipModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
  ],
  templateUrl: './prestaciones.component.html'
})
export default class PrestacionesComponent {

  private _displayedColumns: string[];
  private _dataSource: Benefits[];

  get displayedColumns() {
    return this._displayedColumns;
  }

  get dataSource() {
    return this._dataSource;
  }

  constructor() {
    this._displayedColumns = ['id', 'description', 'actions'];
    this._dataSource = [
      {
        id: 1,
        description: 'Derecho a 15 días de vacaciones desde el primer año'
      },
      {
        id: 2,
        description: 'Descuento del 20% en el colegio Chapultepec'
      },
      {
        id: 3,
        description: 'Aguinaldo equivalente a 2 meses de sueldo'
      }
    ];
  }
}
