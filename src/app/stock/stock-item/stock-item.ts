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

public stock !:Array<Stock>;
  public stockClasses!: {}; 
   public stockStyles  !:{} 
   public bgstyles!:{};
constructor() {   
    this.stock = [
      new Stock('Test Stock Company', 'TSC', 85, 80),
      new Stock('Second Stock Company', 'SSC', 10, 20),
      new Stock('Last Stock Company', 'LSC', 876, 765)
    ];
  }
  ngOnInit() {
      
    
  }
   toggleFavorite(event :any,i: number) {
    console.log("event is -"+event)
    // this.favorite = !this.favorite;
    this.stock[i].favorite = !this.stock[i].favorite
  }
}
