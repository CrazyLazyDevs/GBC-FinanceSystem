import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { catchError, map, of } from 'rxjs';
import { AuthService } from './auth.service';

export const authGuard: CanActivateFn = () => {
  const auth = inject(AuthService);
  const loginPage = inject(Router).createUrlTree(['/login']);
  if (!auth.isAuthenticated()) return loginPage;

  return auth.validateSession().pipe(
    map(() => true),
    catchError(() => {
      auth.logout();
      return of(loginPage);
    }),
  );
};
