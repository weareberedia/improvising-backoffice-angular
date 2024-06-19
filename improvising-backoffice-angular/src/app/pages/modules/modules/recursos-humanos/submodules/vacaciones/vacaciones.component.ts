import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';

interface VacationsRequest {
  id: number;
  employeeName: string;
  employeeLastName: string;
  days: number;
  startDate: string;
}

@Component({
  selector: 'vacaciones-component',
  standalone: true,
  imports: [
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatTooltipModule,
  ],
  templateUrl: './vacaciones.component.html',
})
export default class VacacionesComponent {

  private _displayedColumns: string[];
  private _dataSource: VacationsRequest[];

  get displayedColumns() {
    return this._displayedColumns;
  }

  get dataSource() {
    return this._dataSource;
  }

  constructor() {
    this._displayedColumns = ['id', 'employeeName', 'employeeLastName', 'days', 'startDate', 'actions'];
    this._dataSource = [
      {
        id: 1,
        employeeName: 'Abraham',
        employeeLastName: 'Berrelleza',
        days: 12,
        startDate: '01/01/2024'
      },
      {
        id: 1,
        employeeName: 'Miguel',
        employeeLastName: 'Heredia',
        days: 20,
        startDate: '03/01/2024'
      },
      {
        id: 3,
        employeeName: 'Adrian',
        employeeLastName: 'Sanchez',
        days: 15,
        startDate: '02/01/2024'
      }
    ];
  }
}
