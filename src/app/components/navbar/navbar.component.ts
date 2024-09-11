import { Component, OnInit } from '@angular/core';
import { DataStorageService } from 'src/app/service/data-storage.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  cartAmount:any = 0;
  constructor(private dataStorage:DataStorageService) { }

  ngOnInit(): void {
    if(this.dataStorage.getCartData() === null){
      this.cartAmount = 0;
    }else{
      this.cartAmount = this.dataStorage.getCartData().length;
    }

  }

}
