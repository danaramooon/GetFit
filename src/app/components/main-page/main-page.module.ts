import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page.component';
import { BannerAreaModule } from '../banner-area/banner-area.module';

@NgModule({
  declarations: [MainPageComponent],
  imports: [
    CommonModule,
    BannerAreaModule
  ]
})
export class MainPageModule { }

