import { Component, OnInit } from '@angular/core';
import { ProductDetails } from './data/product-details';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent implements OnInit {
 productDetails: ProductDetails ={
   productId: 'h101',
   productName: 'milton' ,
   productCost: '600' ,
   productonline: ' yes ',
   productCategory: ' electronics',
   availablestore: ' dmart'

 }
  constructor() { }

  ngOnInit() {
  }

}
