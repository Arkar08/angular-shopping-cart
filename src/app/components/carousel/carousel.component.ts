import { Component, OnInit } from '@angular/core';
import { images } from 'src/app/constant/constant';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  images:any[] =[]
  constructor() { }

  ngOnInit(): void {
    this.images = images;
  }

}
