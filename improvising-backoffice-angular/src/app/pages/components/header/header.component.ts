import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { Router } from '@angular/router';

@Component({
  selector: 'header-component',
  standalone: true,
  imports: [
    MatMenuModule,
    MatIconModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  constructor(private _router: Router) { }

  logout() {
    this._router.navigateByUrl('/autenticacion');
  }
}
