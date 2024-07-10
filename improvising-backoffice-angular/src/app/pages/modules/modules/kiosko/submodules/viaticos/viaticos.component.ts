import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTableModule } from '@angular/material/table';

interface TravelExpenseRequest {
  id: number;
  amount: number;
  startDate: string;
  endDate: string;
}

@Component({
  selector: 'employee-viaticos-component',
  standalone: true,
  imports: [
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    MatTableModule,
  ],
  templateUrl: './viaticos.component.html'
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
    this._displayedColumns = ['id', 'amount', 'startDate', 'endDate', 'actions'];
    this._dataSource = [
      {
        id: 1,
        amount: 5500,
        startDate: '01/03/2024',
        endDate: '10/03/2024'
      }
    ];
  }
}
