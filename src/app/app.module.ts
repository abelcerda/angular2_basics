import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MyBannerComponent } from './my-banner/my-banner.component';
import { CommonLabelsService, DataService } from './services';

@NgModule({
  declarations: [
    AppComponent,
    MyBannerComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [CommonLabelsService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
