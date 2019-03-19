import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page.component';
import { BannerAreaModule } from '../banner-area/banner-area.module';
import { GetFitComponent } from './get-fit/get-fit.component';

@NgModule({
  declarations: [MainPageComponent, GetFitComponent],
  imports: [
    CommonModule,
    BannerAreaModule
  ]
})
export class MainPageModule { }

