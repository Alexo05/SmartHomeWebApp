import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:'',
        pathMatch:'full',
        redirectTo: 'dashboard'
    },
    {
        path:'dashboard',
        loadComponent: () => import('./home/home').then(m => m.Home)
    }
];
