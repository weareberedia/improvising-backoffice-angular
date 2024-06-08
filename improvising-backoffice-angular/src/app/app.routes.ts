import { Route } from '@angular/router';

import { routes as authRoutes } from './auth/auth.routes'


export const routes: Route[] = Array.prototype.concat(
    authRoutes.map(route => route)
)
