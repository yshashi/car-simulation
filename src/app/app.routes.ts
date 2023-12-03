import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: ()=> import('./feature/home/home.component').then(a=> a.HomeComponent)
  },
  {
    path: 'car-simulation',
    loadComponent: ()=> import('./feature/car-simulation/car-simulation.component').then(a=> a.CarSimulationComponent)
  },
  {
    path: 'project-detail',
    loadComponent: () => import('./feature/project-detail/project-detail.component').then(a => a.ProjectDetailComponent)
  }
];
