import { Routes } from '@angular/router';
import { authGuard } from './auth.guard';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
    canActivate: [authGuard],
  },
  {
    path: 'login',
    loadComponent: () => import('./admin/admin.page').then((m) => m.AdminPage),
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'admin',
    loadComponent: () => import('./admin/admin.page').then( m => m.AdminPage)
  },  {
    path: 'admin-dashboard',
    loadComponent: () => import('./admin-dashboard/admin-dashboard.page').then( m => m.AdminDashboardPage)
  },

];
