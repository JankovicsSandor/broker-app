import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssetRoutingModule } from './asset-routing.module';
import { AssetComponent } from './asset.component';
import { StoreModule } from '@ngrx/store';
import { TickerEffects, tickerReducer } from '@state';
import { EffectsModule } from '@ngrx/effects';
import { SelectAssetService } from './services/select-asset.service';


@NgModule({
  declarations: [
    AssetComponent
  ],
  imports: [
    CommonModule,
    AssetRoutingModule,
    StoreModule.forFeature("Assets", {selected:tickerReducer}),
    EffectsModule.forFeature([TickerEffects])
  ],
  providers: [SelectAssetService]
})
export class AssetModule {
  constructor(private assetService: SelectAssetService) { }
}
