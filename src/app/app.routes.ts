import { Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component'; // Adjust path as needed
import { UserProfileComponent } from './user-profile/user-profile.component'; // Assume you create this separately

export const routes: Routes = [
  { path: '', redirectTo: '/user-list', pathMatch: 'full' },
  { path: 'user-list', component: UserListComponent },
  { path: 'user-profile', component: UserProfileComponent }
];
