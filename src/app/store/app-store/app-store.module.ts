import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { appNode, AppReducers } from './store/reducers/app-store.reducers';
import { EffectsModule } from '@ngrx/effects';
import { SearchWeatherEffects } from './store/effects/app-store.effects';
import { _createStoreReducers } from '@ngrx/store/src/store_config';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(appNode, AppReducers),
    EffectsModule.forFeature([SearchWeatherEffects]),
  ],
})
export class AppStoreModule { }
