import { Route } from '@angular/router';
import { routes as authRoutes } from './auth/auth.routes'
import { routes as pagesRoutes } from './pages/pages.routes';

export const routes: Route[] = Array.prototype.concat(
    [
        {
            path: '',
            pathMatch: 'full',
            redirectTo: 'inicio/modulos'
        },
        // {
        //     path: '**',
        //     pathMatch: 'full',
        //     loadComponent: () => import('./components/page-not-found/page-not-found.component').then((mod) => mod.PageNotFoundComponent)
        // }
    ],
    pagesRoutes.map(route => route),
    authRoutes.map(route => route)
)
