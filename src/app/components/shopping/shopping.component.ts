import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { productData } from 'src/app/constant/constant';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent implements OnInit {
  getId:any;
  data:any;
  getSize:string[]=[];
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {

   this.getId = this.route.snapshot.paramMap.get('id');
   

   productData.filter((p:any)=>{
    if(p.pdId == this.getId){
      this.data = p;
      // localStorage.setItem('data',JSON.stringify(p))
    }
   })

  //  const getData:any = localStorage.getItem('data')
  //  this.data = JSON.parse(getData)


   this.getSize = this.data.pdSize;
  }

 

}
