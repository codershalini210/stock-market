import { Component } from '@angular/core';
// import { NgClass } from "../../../../node_modules/@angular/common/types/_common_module-chunk";
import { CommonModule } from '@angular/common';
import { Stock } from '../../model/stock';
@Component({
  selector: 'app-stock-item',
  imports: [CommonModule],
  templateUrl: './stock-item.html',
  styleUrl: './stock-item.css',
})
export class StockItem {
//  public name!: string; 
//   public code!: string;
//   public price!: number;
//   public previousPrice!: number;
//    public positiveChange!: boolean;
//     public favorite!: boolean;
public stock !:Stock;
  constructor() { }
  ngOnInit() {
    // this.name = 'Test Stock Company';
    // this.code = 'TSC';
    // this.price = 85;
    // this.previousPrice = 90;
    // this.favorite = false;
    //  this.positiveChange = this.price >= this.previousPrice;
    this.stock = new Stock("Test Stock Company","TSC",80,95)
  }
   toggleFavorite(event :any) {
    console.log("event is -"+event)
    // this.favorite = !this.favorite;
    this.stock.favorite = !this.stock.favorite
  }
}
