import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const router: Routes = [
    {
        path: '',
        redirectTo: '/index',
        pathMatch: 'full'
    },
    {
        path: 'index',
        loadChildren: './_components/pages/index/index.module#IndexModule'
    }
];

export const RoutingModule: ModuleWithProviders = RouterModule.forRoot(router);