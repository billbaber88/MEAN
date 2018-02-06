import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Product } from '../products';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  products: Array<Product> = [];
  
  constructor(private _dataService: DataService) { }

  ngOnInit() {
    this._dataService.productsObservable.subscribe( (products) => {
      this.products = products;
    });
  }

  deleteProduct(product) {
    const idx = this.products.indexOf(product);
    this.products.splice(idx, 1);
    this._dataService.updateProducts(this.products);
  }

}
