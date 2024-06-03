import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./modules/home-page/home-page.module').then((m) => m.HomeModule),
  },
  {
    path: 'home/:id',
    loadChildren: () => import('./modules/details-page/details-page.module').then((m) => m.DetailsPageModule),
  },
  {
    path: '**',
    loadChildren: () => import('./modules/error-page/error-page.module').then((m) => m.ErrorPageModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
