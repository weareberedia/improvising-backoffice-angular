import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';

interface Nomina {
  id: number;
  amount: number;
  taxes: number;
  createdDate: string;
}

@Component({
  selector: 'nomina-component',
  standalone: true,
  imports: [
    MatInputModule,
    MatDatepickerModule,
    MatTooltipModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
  ],
  templateUrl: './nomina.component.html',
})
export default class NominaComponent {

  private _displayedColumns: string[];
  private _dataSource: Nomina[];

  get displayedColumns() {
    return this._displayedColumns;
  }

  get dataSource() {
    return this._dataSource;
  }

  constructor() {
    this._displayedColumns = ['id', 'amount', 'taxes', 'createdDate', 'actions'];
    this._dataSource = [
      {
        id: 1,
        amount: 250000,
        taxes: 50000,
        createdDate: '15/01/2024'
      },
      {
        id: 2,
        amount: 255200,
        taxes: 51000,
        createdDate: '30/01/2024'
      },
      {
        id: 3,
        amount: 248000,
        taxes: 47500,
        createdDate: '15/02/2024'
      }
    ];
  }
}
