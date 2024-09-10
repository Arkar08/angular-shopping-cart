import { Component, OnInit } from '@angular/core';
import { fashion } from 'src/app/constant/constant';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  fashion:any[]=[];
  constructor() { }

  ngOnInit(): void {
    this.fashion = fashion;
  }

}
