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
                    loadComponent: () => import('./pages/modules/modules.component')
                },
                {
                    path: 'perfil',
                    loadComponent: () => import('./pages/components/profile/profile.component')
                },
                {
                    path: 'modulos/recursos-humanos',
                    pathMatch: 'full',
                    redirectTo: 'modulos/recursos-humanos/colaboradores'
                },
                {
                    path: 'modulos/recursos-humanos',
                    loadComponent: () => import('./pages/modules/modules/recursos-humanos/recursos-humanos.component'),
                    children: [
                        {
                            path: 'colaboradores',
                            loadComponent: () => import('./pages/modules/modules/recursos-humanos/submodules/colaboradores/colaboradores.component')
                        },
                        {
                            path: 'vacaciones',
                            loadComponent: () => import('./pages/modules/modules/recursos-humanos/submodules/vacaciones/vacaciones.component')
                        },
                        {
                            path: 'viaticos',
                            loadComponent: () => import('./pages/modules/modules/recursos-humanos/submodules/viaticos/viaticos.component')
                        },
                        {
                            path: 'prestaciones',
                            loadComponent: () => import('./pages/modules/modules/recursos-humanos/submodules/prestaciones/prestaciones.component')
                        },
                        {
                            path: 'capacitaciones',
                            loadComponent: () => import('./pages/modules/modules/recursos-humanos/submodules/capacitaciones/capacitaciones.component')
                        }
                    ]
                },
                {
                    path: 'modulos/finanzas',
                    pathMatch: 'full',
                    redirectTo: 'modulos/finanzas/cuentas-empleados'
                },
                {
                    path: 'modulos/finanzas',
                    loadComponent: () => import('./pages/modules/modules/finanzas/finanzas.component'),
                    children: [
                        {
                            path: 'cuentas-empleados',
                            loadComponent: () => import('./pages/modules/modules/finanzas/submodules/cuentas-empleados/cuentas-empleados.component')
                        },
                        {
                            path: 'transacciones',
                            loadComponent: () => import('./pages/modules/modules/finanzas/submodules/transacciones/transacciones.component')
                        },
                        {
                            path: 'nomina',
                            loadComponent: () => import('./pages/modules/modules/finanzas/submodules/nomina/nomina.component')
                        }
                    ]
                },
                {
                    path: 'modulos/inventario',
                    pathMatch: 'full',
                    redirectTo: 'modulos/inventario/mercancia'
                },
                {
                    path: 'modulos/inventario',
                    loadComponent: () => import('./pages/modules/modules/inventario/inventario.component'),
                    children: [
                        {
                            path: 'mercancia',
                            loadComponent: () => import('./pages/modules/modules/inventario/submodules/mercancia/mercancia.component')
                        },
                        {
                            path: 'proveedores',
                            loadComponent: () => import('./pages/modules/modules/inventario/submodules/proveedores/proveedores.component')
                        }
                    ]
                },
                {
                    path: 'modulos/kiosko',
                    pathMatch: 'full',
                    redirectTo: 'modulos/kiosko/tickets'
                },
                {
                    path: 'modulos/kiosko',
                    loadComponent: () => import('./pages/modules/modules/kiosko/kiosko.component'),
                    children: [
                        {
                            path: 'tickets',
                            loadComponent: () => import('./pages/modules/modules/kiosko/submodules/tickets/tickets.component')
                        },
                        {
                            path: 'vacaciones',
                            loadComponent: () => import('./pages/modules/modules/kiosko/submodules/vacaciones/vacaciones.component')
                        },
                        {
                            path: 'viaticos',
                            loadComponent: () => import('./pages/modules/modules/kiosko/submodules/viaticos/viaticos.component')
                        }
                    ]
                },
            ]
        },
        {
            path: 'autenticacion',
            loadComponent: () => import('./auth/auth.component'),
            children: [
                {
                    path: '',
                    loadComponent: () => import('./auth/components/login/login.component'),
                    data: { animation: 'loginFade' }
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
