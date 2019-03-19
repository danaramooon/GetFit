import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuPageComponent } from './menu-page.component';
import { MenuMenuComponent } from './menu-menu/menu-menu.component';
import { MenuReservationComponent } from './menu-reservation/menu-reservation.component';
import { BannerAreaModule } from '../banner-area/banner-area.module';

@NgModule({
  declarations: [MenuPageComponent, MenuMenuComponent, MenuReservationComponent],
  imports: [
    BannerAreaModule,
    CommonModule
  ]
})
export class MenuPageModule { }
