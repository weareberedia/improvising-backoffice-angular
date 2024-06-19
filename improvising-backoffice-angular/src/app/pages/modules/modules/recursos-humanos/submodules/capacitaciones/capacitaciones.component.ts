import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTableModule } from '@angular/material/table';

interface Capacitacion {
  id: number;
  name: string;
  description: string;
}

@Component({
  selector: 'capacitaciones-component',
  standalone: true,
  imports: [
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    MatTableModule,
  ],
  templateUrl: './capacitaciones.component.html',
})
export default class CapacitacionesComponent {

  private _displayedColumns: string[];
  private _dataSource: Capacitacion[];

  get displayedColumns() {
    return this._displayedColumns;
  }

  get dataSource() {
    return this._dataSource;
  }

  constructor() {
    this._displayedColumns = ['id', 'name', 'description', 'actions'];
    this._dataSource = [
      {
        id: 1,
        name: 'Ciberseguridad',
        description: 'Ejemplo'
      },
      {
        id: 2,
        name: 'Prevención de Lavado de Dinero',
        description: 'Ejemplo'
      },
      {
        id: 3,
        name: 'SCRUM',
        description: 'Ejemplo'
      }
    ];
  }
}
