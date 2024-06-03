import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsPageMainComponent } from './components/details-page-main/details-page-main.component';
import { DetailsPageWrapperComponent } from './components/details-page-wrapper/details-page-wrapper.component';
import { DetailsPageRoutingModule } from './details-page-routing.module';
import { AppStoreModule } from 'src/app/store/app-store/app-store.module';
import { MatCardModule } from '@angular/material/card';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatIconModule } from '@angular/material/icon';
import { DetailsCardsComponent } from './components/details-cards/details-cards.component';



@NgModule({
  declarations: [DetailsPageMainComponent, DetailsPageWrapperComponent, DetailsCardsComponent],
  imports: [
    CommonModule,
    SharedModule,
    DetailsPageRoutingModule,
    AppStoreModule,
    MatCardModule,
    MatIconModule
  ]
})
export class DetailsPageModule { }
