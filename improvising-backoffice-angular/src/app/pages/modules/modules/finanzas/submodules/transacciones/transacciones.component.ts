import { Component } from '@angular/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatTableModule } from '@angular/material/table';

interface Transaction {
  id: number;
  amount: number;
  date: string;
}

@Component({
  selector: 'transacciones-component',
  standalone: true,
  imports: [
    MatTooltipModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatDatepickerModule,
    MatTableModule,
  ],
  templateUrl: './transacciones.component.html',
})
export default class TransaccionesComponent {

  private _displayedColumns: string[];
  private _dataSource: Transaction[];

  get displayedColumns() {
    return this._displayedColumns;
  }

  get dataSource() {
    return this._dataSource;
  }

  constructor() {
    this._displayedColumns = ['id', 'amount', 'date', 'actions'];
    this._dataSource = [
      {
        id: 1,
        amount: 2000,
        date: '01/01/2024'
      },
      {
        id: 2,
        amount: 2500,
        date: '01/01/2024'
      },
      {
        id: 3,
        amount: 10000,
        date: '01/01/2024'
      }
    ];
  }
}
