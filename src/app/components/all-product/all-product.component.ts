import { Component, OnInit } from '@angular/core';
import { productData } from 'src/app/constant/constant';

@Component({
  selector: 'app-all-product',
  templateUrl: './all-product.component.html',
  styleUrls: ['./all-product.component.css']
})
export class AllProductComponent implements OnInit {
  allProduct:any[] = [];
  constructor() { }

  ngOnInit(): void {
    this.allProduct = productData
  }

}
