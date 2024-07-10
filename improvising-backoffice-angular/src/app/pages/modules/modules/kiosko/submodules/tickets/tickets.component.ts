import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';

interface Ticket {
  id: number;
  description: string;
  date: string;
}

@Component({
  selector: 'employee-tickets-component',
  standalone: true,
  imports: [
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    MatTableModule
  ],
  templateUrl: './tickets.component.html',
})
export default class TicketsComponent {

  private _displayedColumns: string[];
  private _dataSource: Ticket[];

  get displayedColumns() {
    return this._displayedColumns;
  }

  get dataSource() {
    return this._dataSource;
  }

  constructor() {
    this._displayedColumns = ['id', 'actions'];
    this._dataSource = [
      {
        id: 1,
        description: 'Ejemplo',
        date: '01/01/2024'
      }
    ]
  }
}
