import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { productData } from 'src/app/constant/constant';
import { DataStorageService } from 'src/app/service/data-storage.service';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent implements OnInit {
  getId:any;
  data:any;
  shoppinglist:any[]=[];
  getSize:string[]=[];
  storeData:any;
  qtyAdd:any;
  cart:boolean=false;
  constructor(private route:ActivatedRoute,private dataStorage:DataStorageService,private router:Router) { }

  ngOnInit(): void {
    
    
    this.storeData = this.dataStorage.getCartData();
 

   
    
   this.getId = this.route.snapshot.paramMap.get('id');
   
   if(this.storeData !== null){
    this.shoppinglist= this.storeData;

    this.storeData.filter((p:any)=>{
      if(p.pdId == this.getId){
        this.cart = true;
      }
    })
  }
  
   productData.filter((p:any)=>{
    if(p.pdId == this.getId){
      this.data = p;
    }
   })

   this.getSize = this.data.pdSize;
  }

  handleClick(data:any){
    this.qtyAdd = {...data,qty:1}
    console.log(this.qtyAdd)
    this.shoppinglist.push(this.qtyAdd)
    console.log(this.shoppinglist)
   this.dataStorage.storeCartData(this.shoppinglist)
   this.router.navigate(['/cart'])
  }
 

}
