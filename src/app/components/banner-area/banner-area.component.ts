import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-banner-area',
  templateUrl: './banner-area.component.html',
  styleUrls: ['./banner-area.component.css']
})
export class BannerAreaComponent implements OnInit {
  @Input() imgPath = '';
  @Input() title = '';
  @Input() title1 = 'Лучший сервис по доставке правильного и сбалансированного питания в вашем городе!';
  @Input() btnText = 'Выбрать программу';
  constructor() { }
  
  ngOnInit() {
  }

}
