import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTableModule } from '@angular/material/table';

interface VacationRequest {
  id: number;
  startDate: string;
  endDate: string;
  status: string;
}

@Component({
  selector: 'employee-vacaciones-component',
  standalone: true,
  imports: [
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    MatTableModule,
  ],
  templateUrl: './vacaciones.component.html'
})
export default class VacacionesComponent {

  private _displayedColumns: string[];
  private _dataSource: VacationRequest[];

  get displayedColumns() {
    return this._displayedColumns;
  }

  get dataSource() {
    return this._dataSource;
  }

  constructor() {
    this._displayedColumns = ['id', 'startDate', 'endDate', 'status', 'actions'];
    this._dataSource = [
      {
        id: 1,
        startDate: '25/01/2024',
        endDate: '05/02/2024',
        status: 'PENDIENTE'
      }
    ];
  }
}
