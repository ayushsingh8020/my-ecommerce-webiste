import { inject } from '@angular/core';
import { CanActivateFn , Router} from '@angular/router';

export const authGuard2: CanActivateFn = (route, state) => {
const _router = inject(Router);

  let isSignUped = localStorage.getItem('isSignUped');
  if(isSignUped == 'false'){
alert('Please SignUp');
_router.navigate(['user-sign-up-page'])
 return false
}
_router.navigate(['/'])
alert ('Signup Successful ')
return true;
};
