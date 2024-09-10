import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { productData, subCategorisFilterData } from 'src/app/constant/constant';



@Component({
  selector: 'app-filter-product',
  templateUrl: './filter-product.component.html',
  styleUrls: ['./filter-product.component.css']
})
export class FilterProductComponent implements OnInit {
  products:any;
  filterProduct : any[]=[];
  subCategories:any[]=[];
  getData:string=''
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.products =this.route.snapshot.paramMap.get('name')


    productData.filter((p:any)=>{
      if(p.pdCategory == this.products){
        this.filterProduct.push(p)
      }
    })
    subCategorisFilterData.filter((p:any)=>{
      if(p.categories == this.products){
        this.subCategories.push(p)
      }
    })
  }

  handleChange(category:any){
    this.getData = category.target.value;
    console.log(this.getData)
      productData.filter((r:any)=>{
        if(r.pdSubCategory== this.getData){
          console.log(r)
          this.filterProduct.push(r)
        }
      })
  }
}



