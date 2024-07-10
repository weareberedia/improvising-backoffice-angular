import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTableModule } from '@angular/material/table';

interface Employee {
  id: number;
  name: string;
  lastName: string;
  age: number;
  jobPosition: string;
  salary: number;
}

@Component({
  selector: 'colaboradores-component',
  standalone: true,
  imports: [
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    MatTableModule,
  ],
  templateUrl: './colaboradores.component.html',
})
export default class ColaboradoresComponent {

  private _displayedColumns: string[];
  private _dataSource: Employee[];

  get displayedColumns() {
    return this._displayedColumns;
  }

  get dataSource() {
    return this._dataSource;
  }

  constructor() {
    this._displayedColumns = ['id', 'name', 'lastName', 'age', 'jobPosition', 'salary', 'actions'];
    this._dataSource = [
      {
        id: 1,
        name: 'Abraham',
        lastName: 'Berrelleza',
        age: 24,
        jobPosition: 'Software Engineer',
        salary: 50000
      },
      {
        id: 2,
        name: 'Jose Miguel',
        lastName: 'Heredia',
        age: 34,
        jobPosition: 'Scrum Master',
        salary: 50000
      },
      {
        id: 3,
        name: 'Adrian',
        lastName: 'Sanchez',
        age: 26,
        jobPosition: 'Software Engineer',
        salary: 50000
      }
    ];
  }
}
