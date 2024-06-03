import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageMainComponent } from './components/home-page-main/home-page-main.component';
import { HomeListWrapperComponent } from './components/home-list-wrapper/home-list-wrapper.component';
import { HomeRoutingModule } from './home-page-routing.module';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { HomeSearchComponent } from './components/home-search/home-search.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { HomeListComponent } from './components/home-list/home-list.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    HomePageMainComponent,
    HomeSearchComponent,
    HomeListWrapperComponent,
    HomeListComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatProgressSpinnerModule,
  ],
  exports: [
  ]
})
export class HomeModule { }
