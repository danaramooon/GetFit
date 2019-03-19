import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerAreaComponent } from './banner-area.component';

@NgModule({
  declarations: [BannerAreaComponent],
  imports: [
    CommonModule
  ],
  exports: [
    BannerAreaComponent
  ]
})
export class BannerAreaModule { }
