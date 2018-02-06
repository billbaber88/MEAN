import { Injectable } from '@angular/core';
import { Product } from './products';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class DataService {
  productsObservable = new BehaviorSubject(null);

  constructor() { }

  updateProducts(product: Array<Product>) {
    this.productsObservable.next(product);
  }

}
