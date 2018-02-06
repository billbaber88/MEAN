import { Component, OnInit } from '@angular/core';
import { Product } from '../products';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  newProduct: Product = new Product();
  products: Array<Product>;

  constructor(
    // these are variable, or parameters if you will. You compenent needs these in order to construct itself
    private _produceService: DataService,
    private _router: Router
  ) {
    // referencing variables from above
    this._produceService.productsObservable.subscribe( (products) => {
      this.products = products;
    })
   }

  
  ngOnInit() {
    this.newProduct = new Product();
  }

// adds new product info to db
  create() {
    if (this.newProduct.imgUrl.length < 1 ||
    this.newProduct.imgUrl === 'null' || 
    this.newProduct.imgUrl === null) {
      this.newProduct.imgUrl = null;
    }
    this.products.push(this.newProduct);
    this._produceService.updateProducts(this.products);
    this.newProduct = new Product();
    this._router.navigate(['/list']);
  }

}
