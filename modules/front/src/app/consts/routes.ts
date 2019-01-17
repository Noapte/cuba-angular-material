import {UsersListComponent} from '../users/UsersList.component';
import {LogOutComponent} from '../log-out/logOut.component';

export const routes = [
  { path: 'users', component: UsersListComponent },
  { path: 'log-out', component: LogOutComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', redirectTo: 'login', pathMatch: 'full' }
];
