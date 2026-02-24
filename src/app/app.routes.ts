import { Routes } from '@angular/router';
import { LoginComponent } from './components/pages/login/login';
import { HomeComponent } from './components/pages/home/home';
import { authGuard } from './services/guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
  },

  {
    path: 'home',
    component: HomeComponent,
    canActivate: [authGuard],
  },

  {
    path: '**',
    redirectTo: 'login',
  },
];
