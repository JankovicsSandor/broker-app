import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssetRoutingModule } from './asset-routing.module';
import { AssetComponent } from './asset.component';
import { StoreModule } from '@ngrx/store';
import { TickerEffects, tickerFeatureName, tickerReducer } from '@state';
import { EffectsModule } from '@ngrx/effects';
import { SelectAssetService } from './services/select-asset.service';
import { AssetListComponent } from './asset-list/asset-list.component';
import { TableModule } from 'primeng/table';
import { TradeService } from './services/trade.service';

@NgModule({
  declarations: [
    AssetComponent,
    AssetListComponent
  ],
  imports: [
    CommonModule,
    AssetRoutingModule,
    TableModule,
    StoreModule.forFeature(tickerFeatureName, tickerReducer),
    EffectsModule.forFeature([TickerEffects])
  ],
  providers: [SelectAssetService,TradeService]
})
export class AssetModule {
  constructor(private assetService: SelectAssetService) { }
}
