import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgrammsPageComponent } from './programms-page.component';
import { ProgrammChooseComponent } from './programm-choose/programm-choose.component';
import { ProgrammWeightlossComponent } from './programm-weightloss/programm-weightloss.component';
import { ProgrammForhealthComponent } from './programm-forhealth/programm-forhealth.component';
import { ProgrammForveganComponent } from './programm-forvegan/programm-forvegan.component';
import { ProgrammHelpComponent } from './programm-help/programm-help.component';
import { BannerAreaModule } from '../banner-area/banner-area.module';

@NgModule({
  declarations: [ProgrammsPageComponent, ProgrammChooseComponent, ProgrammWeightlossComponent, ProgrammForhealthComponent, ProgrammForveganComponent, ProgrammHelpComponent],
  imports: [
    CommonModule,
    BannerAreaModule
  ]
})
export class ProgrammsPageModule { }
