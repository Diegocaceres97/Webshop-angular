import { Component, OnInit, AfterViewInit } from '@angular/core';
import swiper from 'swiper';

import Swiper from 'swiper';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {

  mySwiper: swiper;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(){
    this.mySwiper = new Swiper('.swiper-container');
  }

}
