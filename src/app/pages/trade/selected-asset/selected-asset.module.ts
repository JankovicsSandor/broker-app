import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SelectedAssetRoutingModule } from './selected-asset-routing.module';
import { SelectedAssetComponent } from './selected-asset.component';
import { ProgressBarModule } from 'primeng/progressbar';
import { CardModule } from 'primeng/card';

@NgModule({
  declarations: [
    SelectedAssetComponent
  ],
  imports: [
    CommonModule,
    SelectedAssetRoutingModule,
    ProgressBarModule,
    CardModule
  ]
})
export class SelectedAssetModule { }
