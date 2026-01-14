import { Component,Input,EventEmitter,Output } from '@angular/core';
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
@Input() public stock!:Stock;
  @Output() private toggleFavoriteOut: EventEmitter<Stock>;
// public stock !:Array<Stock>;
//   public stockClasses!: {}; 
//    public stockStyles  !:{} 
//    public bgstyles!:{};
constructor() {   
     this.toggleFavoriteOut = new EventEmitter<Stock>();
  }
  ngOnInit() {
      
    
  }
   toggleFavorite(event :any) {
    this.toggleFavoriteOut.emit(this.stock)
  }
}
