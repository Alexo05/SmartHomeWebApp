import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:'',
        pathMatch:'full',
        redirectTo: 'dashboard'
    },
    {
        path:'dashboard',
        loadComponent: () => import('./dashboard/dashboard').then(m => m.Dashboard)
    },
     {
        path:'devices',
        loadComponent: () => import('./devices/devices').then(m => m.Devices)
    }
];
