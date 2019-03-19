import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetoxPageComponent } from './detox-page.component';
import { DetoxMeComponent } from './detox-me/detox-me.component';
import { DetoxAdvantagesComponent } from './detox-advantages/detox-advantages.component';
import { DetoxMenuComponent } from './detox-menu/detox-menu.component';
import { DetoxReservationComponent } from './detox-reservation/detox-reservation.component';
import { BannerAreaModule } from '../banner-area/banner-area.module';

@NgModule({
  declarations: 
  [
    DetoxPageComponent,
     DetoxMeComponent, 
     DetoxAdvantagesComponent, 
     DetoxMenuComponent, DetoxReservationComponent],
  imports: [
    CommonModule,
    BannerAreaModule
  ]
})
export class DetoxPageModule { }
