import { Routes } from '@angular/router';
import { Home } from './home/home';
import { AuthGuard } from './auth-guard';

export const routes: Routes = [
  {
    path: '',
    component: Home,
    canActivate: [AuthGuard],
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
      {
        path: 'dashboard',
        loadComponent: () => import('./dashboard/dashboard').then(m => m.Dashboard),
      },
      {
        path: 'devices',
        loadComponent: () => import('./devices/devices').then(m => m.Devices),
      },
      {
        path: 'settings',
        loadComponent: () => import('./settings/settings').then(m => m.Settings),
      },
    ],
  },
  {
    path: 'login',
    loadComponent: () => import('./login/login').then(m => m.Login),
  },
  {
    path: 'register',
    loadComponent: () => import('./register/register').then(m => m.Register),
  },
//   { path: '**', redirectTo: '' },
];
