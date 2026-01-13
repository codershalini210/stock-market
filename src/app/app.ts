import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StockItem } from './stock/stock-item/stock-item';
import { ProductMini } from './product-mini/product-mini';
import { NgFor } from '@angular/common';
// import { NgForOf } from "../../node_modules/@angular/common/types/_common_module-chunk";
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, StockItem, ProductMini, NgFor],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  items=[
    {name:'Iphone',price:652,inStock:true},
   {name:'Laptop',price:852,inStock:true},
   {name:'AC',price:980,inStock:false},
   {name:'Watch',price:120,inStock:true},
   {name:'Printer',price:80,inStock:true},
   {name:'Ipad',price:250,inStock:false},
   {name:'Refrigerator',price:700,inStock:true},
   {name:'Iron',price:150,inStock:false},
  
   {name:'Pen drive',price:20,inStock:true},
  {name:'Led',price:50,inStock:false},]
  protected readonly title = signal('stock-market');
}
