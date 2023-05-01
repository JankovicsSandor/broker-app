import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopbarComponent } from './shell/topbar/topbar.component';
import { SidebarComponent } from './shell/sidebar/sidebar.component';
import { ProfilePictureComponent } from './shell/profile-picture/profile-picture.component';
import { SkeletonModule } from 'primeng/skeleton';
import { StoreModule } from '@ngrx/store';
import { userReducer, stockReducer, transactionReducer, TransactionEffects } from '@state';
import { DataProviderModule } from '@data-provider';
import { EffectsModule } from '@ngrx/effects';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    SidebarComponent,
    ProfilePictureComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SkeletonModule,
    ToastModule,
    StoreModule.forRoot({ user: userReducer, stock: stockReducer,openTransactions:transactionReducer }),
    EffectsModule.forRoot([TransactionEffects]),
    DataProviderModule,
    BrowserAnimationsModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
