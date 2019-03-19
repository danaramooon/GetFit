import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { DetoxPageComponent } from './components/detox-page/detox-page.component';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { ContactPageComponent } from './components/contact-page/contact-page.component';

const routes: Routes = [
  {path: 'detox', component: DetoxPageComponent },
  {path:'contact', component:ContactPageComponent},
  { path: 'reviews', component: ReviewsComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
