import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'modules-component',
  standalone: true,
  imports: [
    RouterModule,
    MatIconModule,
    MatButtonModule
  ],
  templateUrl: './modules.component.html',
  styleUrl: './modules.component.scss'
})
export default class ModulesComponent {

}
