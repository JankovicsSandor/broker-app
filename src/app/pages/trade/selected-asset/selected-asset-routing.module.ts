import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SelectedAssetComponent } from './selected-asset.component';

const routes: Routes = [{ path: '', component: SelectedAssetComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SelectedAssetRoutingModule { }
