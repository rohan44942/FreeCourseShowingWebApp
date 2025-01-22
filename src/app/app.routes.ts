import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { AdminComponent } from './pages/admin/admin.component';
import { CoursesComponent } from './pages/courses/courses.component';
import { ErrorComponent } from './pages/error/error.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  {
    path: 'admin',
    component: AdminComponent,
  },
  {
    path: 'courses',
    component: CoursesComponent,
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: '**',
    component: ErrorComponent,
  },
  // {
  //   path: 'home',
  //   loadComponent: () =>
  //     import('./home/home.component').then((a) => a.HomeComponent),
  // },
  // {
  //   path: 'about',
  //   loadComponent: () =>
  //     import('./about/about.component').then((b) => b.AboutComponent),
  // },
  // {
  //   path: 'admin',
  //   loadComponent: () =>
  //     import('./admin/admin.component').then((b) => b.AdminComponent),
  // },
  // {
  //   path: 'courses',
  //   loadComponent: () =>
  //     import('./courses/courses.component').then((b) => b.CoursesComponent),
  // },
];
