import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';

interface CuentasEmpleados {
  employeeId: number;
  employeeName: string;
  employeeLastName: string;
  accountNumber: string;
}

@Component({
  selector: 'cuentas-empleados-component',
  standalone: true,
  imports: [
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatTooltipModule,
  ],
  templateUrl: './cuentas-empleados.component.html',
})
export default class CuentasEmpleadosComponent {

  private _displayedColumns: string[];
  private _dataSource: CuentasEmpleados[];

  get displayedColumns() {
    return this._displayedColumns;
  }

  get dataSource() {
    return this._dataSource;
  }

  constructor() {
    this._displayedColumns = ['employeeId', 'employeeName', 'employeeLastName', 'accountNumber', 'actions'];
    this._dataSource = [
      {
        employeeId: 1,
        employeeName: 'Abraham',
        employeeLastName: 'Berrelleza',
        accountNumber: '121212121212'
      },
      {
        employeeId: 2,
        employeeName: 'Jose Miguel',
        employeeLastName: 'Heredia',
        accountNumber: '343434343434'
      },
      {
        employeeId: 3,
        employeeName: 'Adrian',
        employeeLastName: 'Sanchez',
        accountNumber: '565656565656'
      }
    ];
  }
}
