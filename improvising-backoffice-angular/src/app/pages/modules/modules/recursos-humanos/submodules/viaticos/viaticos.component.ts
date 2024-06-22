import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';

interface TravelExpenseRequest {
  id: number;
  employeeName: string;
  employeeLastName: string;
  amount: number;
}

@Component({
  selector: 'viaticos-component',
  standalone: true,
  imports: [
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    MatTableModule,
  ],
  templateUrl: './viaticos.component.html',
})
export default class ViaticosComponent {

  private _displayedColumns: string[];
  private _dataSource: TravelExpenseRequest[];

  get displayedColumns() {
    return this._displayedColumns;
  }

  get dataSource() {
    return this._dataSource;
  }

  constructor() {
    this._displayedColumns = ['id', 'employeeName', 'employeeLastName', 'amount', 'actions'];
    this._dataSource = [
      {
        id: 1,
        employeeName: 'Abraham',
        employeeLastName: 'Berrelleza',
        amount: 1200
      },
      {
        id: 1,
        employeeName: 'Miguel',
        employeeLastName: 'Heredia',
        amount: 2000
      },
      {
        id: 3,
        employeeName: 'Adrian',
        employeeLastName: 'Sanchez',
        amount: 15000
      }
    ];
  }
}
