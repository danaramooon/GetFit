import { Component, OnInit, NgModule ,HostListener} from '@angular/core';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
@NgModule({
  imports: [TooltipModule.forRoot()]
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e) {
     if (window.pageYOffset > 550) {
       let element = document.getElementById('header');
       element.classList.add('sticky');
     } else {
      let element = document.getElementById('header');
        element.classList.remove('sticky'); 
     }
  }
  
}
