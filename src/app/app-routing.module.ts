import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CartComponent } from './components/cart/cart.component';
import { AllProductComponent } from './components/all-product/all-product.component';
import { FilterProductComponent } from './components/filter-product/filter-product.component';
import { ShoppingComponent } from './components/shopping/shopping.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'cart',
    component:CartComponent
  },
  {
    path:'products',
    component:AllProductComponent
  },
  {
    path:'products/:name',
    component:FilterProductComponent
  },
  {
    path:'products/:name/:id',
    component:ShoppingComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
