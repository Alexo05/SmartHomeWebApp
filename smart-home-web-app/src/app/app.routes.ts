import { Routes } from '@angular/router';
import { Home } from './home/home';

export const routes: Routes = [
  {
    path: '',
    component: Home,
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
//   {
//     path: 'login',
//     loadComponent: () => import('./auth/login.component').then(m => m.LoginComponent),
//   },
//   {
//     path: 'register',
//     loadComponent: () => import('./auth/register.component').then(m => m.RegisterComponent),
//   },
//   { path: '**', redirectTo: '' },
];
