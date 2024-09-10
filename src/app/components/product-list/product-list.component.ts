import { Component, OnInit } from '@angular/core';
import { productData } from 'src/app/constant/constant';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  productList:any[]=[];
  productSlice:any[]=[];
  constructor() { }

  ngOnInit(): void {
    this.productList = productData
    this.productSlice = this.productList.slice(0,5)
  }

}
