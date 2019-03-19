import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import {DetoxPageModule} from './components/detox-page/detox-page.module';
import { ContactPageModule } from './components/contact-page/contact-page.module';
import { ReviewPageModule } from './components/review-page/review-page.module';
import {MainPageModule} from './components/main-page/main-page.module';
import {ProgrammsPageModule} from './components/programms-page/programms-page.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DetoxPageModule,
    ContactPageModule,
    ReviewPageModule,
    ProgrammsPageModule,
    MainPageModule
  ],
  providers: [],

  bootstrap: [AppComponent]
})
export class AppModule { }
