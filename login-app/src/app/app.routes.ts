import { HomeComponent }     from './home/home.component';
import { LoggedInComponent } from './logged-in/logged-in.component';

import { AuthGard }          from './auth-gard';

import { CanActivate }       from '@angular/router';

export const routes = [
  { path: '', component: HomeComponent },
  { path: 'loggedin', component: LoggedInComponent, canActivate: [AuthGard] },
  { path: '**', redirectTo: '' }
];