import { Component } from '@angular/core';
// import { NgClass } from "../../../../node_modules/@angular/common/types/_common_module-chunk";
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-stock-item',
  imports: [CommonModule],
  templateUrl: './stock-item.html',
  styleUrl: './stock-item.css',
})
export class StockItem {
 public name!: string; 
  public code!: string;
  public price!: number;
  public previousPrice!: number;
   public positiveChange!: boolean;
  constructor() { }
  ngOnInit() {
    this.name = 'Test Stock Company';
    this.code = 'TSC';
    this.price = 85;
    this.previousPrice = 90;
     this.positiveChange = this.price >= this.previousPrice;
  }
}
