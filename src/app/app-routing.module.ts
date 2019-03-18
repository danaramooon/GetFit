import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent} from './components/header/header.component';
import {DetoxPageComponent} from './components/detox-page/detox-page.component'

const routes: Routes = [
  {path: 'detox', component: DetoxPageComponent },
  {path:'header', component:HeaderComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
