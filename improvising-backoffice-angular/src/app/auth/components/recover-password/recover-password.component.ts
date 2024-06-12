import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'recover-password-component',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    RouterModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule
  ],
  templateUrl: './recover-password.component.html',
  styleUrl: './recover-password.component.scss'
})
export default class RecoverPasswordComponent {

}
