import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth';

export const adminGuard = () => {
  const authService = inject(AuthService);
  const router = inject(Router);

  // Csak akkor mehet be, ha be van jelentkezve ÉS admin a szerepköre
  if (authService.isAuthenticated() && authService.isAdmin()) {
    return true;
  } else {
    // Ha nem admin, dobjuk vissza a kezdőlapra
    alert('Nincs jogosultságod az admin oldalhoz!');
    return router.parseUrl('/home');
  }
};
