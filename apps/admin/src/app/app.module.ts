import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FeatureLoginModule } from '@alai/shared/feature-login';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FeatureLoginModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
