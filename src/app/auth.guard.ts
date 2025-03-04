import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const token = localStorage.getItem('token');
  const routes = inject(Router);

  if (token !== null) {
    return true;
  } else {
    routes.navigate(['login']);
    return false;
  }
};
