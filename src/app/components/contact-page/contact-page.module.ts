import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactPageComponent } from './contact-page.component';
import { MapComponent } from './map/map.component';
import { BannerAreaModule } from '../banner-area/banner-area.module';
import { FormComponent } from './form/form.component';

@NgModule({
  declarations: [
    ContactPageComponent, 
    MapComponent, FormComponent,
  ],
  imports: [
    CommonModule,
    BannerAreaModule
  ]
})
export class ContactPageModule { }
