import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Signup } from './signup/signup';
import { Homepage } from './homepage/homepage';
import { Header } from './header/header';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'login', component: Login },
  { path: 'signup', component: Signup },
  {path: 'home', component: Homepage},
  { path: 'header', component: Header }
];