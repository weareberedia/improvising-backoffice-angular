import { Routes } from '@angular/router';

export const routes: Routes = [{
    path: 'inicio',
    loadComponent: () => import('./home.component').then(mod => mod.HomeComponent),
    children: [
        {
            path: 'modulos',
            loadComponent: () => import('./modules/modules.component').then(mod => mod.ModulesComponent)
        },
        {
            path: 'perfil',
            loadComponent: () => import('../components/profile/profile.component').then(mod => mod.ProfileComponent)
        }
    ]
}];
