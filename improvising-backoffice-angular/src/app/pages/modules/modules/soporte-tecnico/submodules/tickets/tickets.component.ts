import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';

interface Ticket {
  id: number;
  userName: string;
  description: string;
  priority: number;
  date: string;
}

@Component({
  selector: 'tickets-component',
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
    this._displayedColumns = ['id', 'userName', 'description', 'priority', 'date', 'actions'];
    this._dataSource = [
      {
        id: 1,
        userName: 'abzaban',
        description: 'Ejemplo',
        priority: 3,
        date: '01/01/2024'
      },
      {
        id: 2,
        userName: 'boss',
        description: 'Ejemplo',
        priority: 1,
        date: '01/01/2024'
      },
      {
        id: 3,
        userName: 'testing',
        description: 'Ejemplo',
        priority: 2,
        date: '01/01/2024'
      }
    ];
  }
}
