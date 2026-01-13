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

public stock !:Stock;
  public stockClasses!: {}; 
   public stockStyles  !:{} 
   public bgstyles!:{};
constructor() { }
  ngOnInit() {
    
    this.stock = new Stock("Test Stock Company","TSC",80,82)
      let diff = (this.stock.price / this.stock.previousPrice) - 1;
    let largeChange = Math.abs(diff) > 0.03;
     this.stockStyles  = {
      'color': this.stock.isPositiveChange() ? 'green' : 'red',
      'font-size': largeChange ? '2em' : '1em'
    };
    this.bgstyles = {
      'background-color':this.stock.isPositiveChange()?'yellow':'pink';
    }
    // this.stockClasses = {
    //   // for the prices being 85, 80
    //   'positive': this.stock.isPositiveChange(),  // true
    //   'negative': !this.stock.isPositiveChange(),   // false
    //   'large-change': largeChange,    // true
    //   'small-change': !largeChange    // false
    // };
    // console.log(this.stockClasses)
  }
   toggleFavorite(event :any) {
    console.log("event is -"+event)
    // this.favorite = !this.favorite;
    this.stock.favorite = !this.stock.favorite
  }
}
