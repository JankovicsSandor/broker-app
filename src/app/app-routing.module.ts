import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  { path: 'trade', loadChildren: () => import('./pages/trade/asset.module').then(m => m.AssetModule) },
  { path: 'wallet', loadChildren: () => import('./pages/wallet/wallet.module').then(m => m.WalletModule) }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
