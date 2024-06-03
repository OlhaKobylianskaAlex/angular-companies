import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsPageMainComponent } from './components/details-page-main/details-page-main.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: DetailsPageMainComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailsPageRoutingModule { }

