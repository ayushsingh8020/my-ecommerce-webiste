import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { MensWearComponent } from './mens-wear/mens-wear.component';
import { KidsWearComponent } from './kids-wear/kids-wear.component';
import { AddToCartComponent } from './add-to-cart/add-to-cart.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { WomensWearComponent } from './womens-wear/womens-wear.component';
import { AllProductsComponent } from './all-products/all-products.component';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { VerificationComponent } from './verification/verification.component';
import { authGuard2 } from './auth-2.guard';
import {authGuard } from './auth.guard';

const routes: Routes = [
{ path: '', component: ProductsComponent ,  },
{path: 'mens-wear', component: MensWearComponent},
{path: 'kids-wear',  component: KidsWearComponent},
{path: 'womens-wear', component : WomensWearComponent},
{path: 'add-to-cart', component: AddToCartComponent},
{path: 'product', component: ProductsComponent},
{path: 'user-sign-up-page', component: UserLoginComponent},
{path: 'all-products', component: AllProductsComponent},
{path: 'log', component: LoginComponent, title: 'Welcome back' ,canActivate:[authGuard] },
{path: 'forgot-password', component: ForgotPasswordComponent},
{path:'verification-code', component: VerificationComponent, canActivate: [authGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
