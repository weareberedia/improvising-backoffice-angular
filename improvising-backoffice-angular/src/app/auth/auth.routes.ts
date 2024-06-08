import { Routes } from '@angular/router';

export const routes: Routes = [{
  path: 'autenticacion',
  loadComponent: () => import('./auth.component').then(mod => mod.AuthComponent),

  children: [
    {
      path: '',
      loadComponent: () => import('./components/login/login.component').then(mod => mod.LoginComponent),
      data: { animation: 'loginFade' },
    },
    {
      path: 'recuperar-contraseña',
      loadComponent: () => import('./components/recover-password/recover-password.component').then((m) => m.RecoverPasswordComponent),
      data: { animation: 'recoverPasswordFade' }
    }
  ]
}];
