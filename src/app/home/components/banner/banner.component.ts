import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  images: string[] = [
    './assets/images/Banner-1.jpg',
    './assets/images/Banner-2.jpg',
    './assets/images/Banner-3.jpg',
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
