import { Route } from '@angular/router';

export const routes: Route[] = Array.prototype.concat(
    [
        {
            path: '',
            pathMatch: 'full',
            redirectTo: 'inicio/modulos'
        },
        {
            path: 'inicio',
            loadComponent: () => import('./pages/home.component'),
            children: [
                {
                    path: 'modulos',
                    loadComponent: () => import('./pages/modules/modules.component'),
                    children: [
                        {
                            path: 'recursos-humanos',
                            loadComponent: () => import('./pages/modules/modules/recursos-humanos/recursos-humanos.component'),
                        }
                    ]
                },
                {
                    path: 'perfil',
                    loadComponent: () => import('./pages/components/profile/profile.component'),
                }
            ]
        },
        {
            path: 'autenticacion',
            loadComponent: () => import('./auth/auth.component'),
            children: [
                {
                    path: '',
                    loadComponent: () => import('./auth/components/login/login.component'),
                    data: { animation: 'loginFade' },
                },
                {
                    path: 'recuperar-contraseña',
                    loadComponent: () => import('./auth/components/recover-password/recover-password.component'),
                    data: { animation: 'recoverPasswordFade' }
                }
            ]
        },
        {
            path: '**',
            loadComponent: () => import('./pages/components/page-not-found/page-not-found.component')
        }
    ]
)
