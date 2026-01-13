import { Component,Input } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-product-mini',
  imports: [NgIf],
  templateUrl: './product-mini.html',
  styleUrl: './product-mini.css',
})
export class ProductMini {
@Input() name="";
@Input() price = 0;
@Input() inStock = true;
}
