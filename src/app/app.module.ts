import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BannerComponent } from './components/banner/banner.component';
import { FooterComponent } from './components/footer/footer.component';
import {DetoxPageModule} from './components/detox-page/detox-page.module';
import { ReviewsComponent } from './components/reviews/reviews.component'
import { ContactPageModule } from './components/contact-page/contact-page.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    FooterComponent,
    ReviewsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DetoxPageModule,
    ContactPageModule,
  ],
  providers: [],

  bootstrap: [AppComponent]
})
export class AppModule { }
