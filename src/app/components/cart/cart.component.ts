import { Component, OnInit } from '@angular/core';
import { DataStorageService } from 'src/app/service/data-storage.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartProduct:any[]=[];
  storeData:any[]=[];
  totalAmount:number = 0;
  totalCart:number = 0;
  addCart:any;
  constructor(private dataStorage:DataStorageService) { }

  ngOnInit(): void {
    this.cartProduct = this.dataStorage.getCartData();
    console.log(this.cartProduct)
    this.totalCart = this.cartProduct.length;
    this.cartProduct.filter((p)=>{
      this.totalAmount = p.pdPrice*p.qty + this.totalAmount;
    })
  }


  remove(data:any){
    localStorage.removeItem('cart-data');
    this.storeData =[];
    this.cartProduct.filter((p)=>{
      if(p.pdId !== data.pdId){
        this.storeData.push(p);
        this.totalAmount = p.pdPrice * p.qty + this.totalAmount;
      }
      this.dataStorage.storeCartData(this.storeData);
      window.location.reload()
    })
   
  }

  addQty(data:any,type:string){
    this.storeData =[];
    this.totalAmount = 0;
    var qty = data.qty;
   if(type === 'plus'){
    this.cartProduct.filter((p:any)=>{
      if(p.pdId === data.pdId){
        p.qty = qty + 1;
      }
      this.totalAmount = p.pdPrice * p.qty + this.totalAmount;
    })
    this.storeData = this.cartProduct;
    this.dataStorage.storeCartData(this.storeData)
    this.cartProduct = this.dataStorage.getCartData();
   }
   if(type === 'minus'){
    this.cartProduct.filter((p:any)=>{
      if(p.pdId === data.pdId){
        p.qty = qty - 1 ;
      }
      this.totalAmount = p.pdPrice * p.qty +this.totalAmount;
      if(p.qty < 1){
        p.qty = 1;
        this.totalAmount = p.pdPrice * p.qty;
      }
    })
    this.storeData = this.cartProduct;
    this.dataStorage.storeCartData(this.storeData)
    this.cartProduct = this.dataStorage.getCartData();
   }
  }
}
