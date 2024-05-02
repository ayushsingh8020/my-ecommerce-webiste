import { inject } from '@angular/core';
import { CanActivateFn , Router} from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
const _router = inject(Router);

  let isloggedin = localStorage.getItem('isloggedIn');
  if(isloggedin== 'false'){
alert('Please login');
_router.navigate(['user-sign-up-page'])
 return false
}
return true;
};
