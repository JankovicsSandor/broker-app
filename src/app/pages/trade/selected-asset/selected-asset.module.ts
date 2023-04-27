import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SelectedAssetRoutingModule } from './selected-asset-routing.module';
import { SelectedAssetComponent } from './selected-asset.component';


@NgModule({
  declarations: [
    SelectedAssetComponent
  ],
  imports: [
    CommonModule,
    SelectedAssetRoutingModule
  ]
})
export class SelectedAssetModule { }
