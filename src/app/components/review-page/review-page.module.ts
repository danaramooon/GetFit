import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReviewPageComponent } from './review-page.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { FormComponent } from './form/form.component';
import { BannerAreaModule } from '../banner-area/banner-area.module';

@NgModule({
  declarations: [ReviewPageComponent, ReviewsComponent, FormComponent],
  imports: [
    CommonModule,
    BannerAreaModule
  ]
})
export class ReviewPageModule { }
