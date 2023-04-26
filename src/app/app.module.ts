import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopbarComponent } from './shell/topbar/topbar.component';
import { SidebarComponent } from './shell/sidebar/sidebar.component';
import { ProfilePictureComponent } from './shell/profile-picture/profile-picture.component';
import { SkeletonModule } from 'primeng/skeleton';
import { StoreModule } from '@ngrx/store';
import { userReducer } from '@state';

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    SidebarComponent,
    ProfilePictureComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SkeletonModule,
    StoreModule.forRoot({ user: userReducer }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
