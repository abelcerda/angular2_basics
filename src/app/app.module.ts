import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyBannerComponent } from './my-banner/my-banner.component';
import { CommonLabelsService } from './services';

@NgModule({
  declarations: [
    AppComponent,
    MyBannerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [CommonLabelsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
