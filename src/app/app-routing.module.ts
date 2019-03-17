import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent} from './components/header/header.component';
import { AboutDetoxComponent } from './components/about-detox/about-detox.component';

const routes: Routes = [
  {path: 'detox', component: AboutDetoxComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
