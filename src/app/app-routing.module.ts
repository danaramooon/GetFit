import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { DetoxPageComponent } from './components/detox-page/detox-page.component';
import { ContactPageComponent } from './components/contact-page/contact-page.component';
import { ReviewPageComponent } from './components/review-page/review-page.component';
import { ProgrammsPageComponent } from './components/programms-page/programms-page.component';
import {MainPageComponent} from './components/main-page/main-page.component';

const routes: Routes = [
  {path: 'detox', component: DetoxPageComponent },
  {path:'contact', component:ContactPageComponent},
  { path: 'reviews', component: ReviewPageComponent },
  {path: 'programms', component: ProgrammsPageComponent},
  {path: 'main', component: MainPageComponent},

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
