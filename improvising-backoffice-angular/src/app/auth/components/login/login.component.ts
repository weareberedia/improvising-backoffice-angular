import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckbox } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'login-component',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    RouterModule,
    MatInputModule,
    MatIconModule,
    MatCheckbox,
    MatButtonModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  private _hidePassword: boolean;

  set hidePassword(hidePassword: boolean) {
    this._hidePassword = hidePassword;
  }

  get hidePassword(): boolean {
    return this._hidePassword;
  }

  constructor(private _router: Router) {
    this._hidePassword = true;
  }

  login() {
    this._router.navigateByUrl('/');
  }
}
