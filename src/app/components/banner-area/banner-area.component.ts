import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-banner-area',
  templateUrl: './banner-area.component.html',
  styleUrls: ['./banner-area.component.css']
})
export class BannerAreaComponent implements OnInit {
  @Input() imgPath = '';
  @Input() title = '';
  constructor() { }
  
  ngOnInit() {
  }

}
