import { Component } from '@angular/core';
import { DataService } from './data.service';
import { Product } from './products';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  products = [
    new Product('Octopus', 300, '../assets/octo-armsup-shadowed.png'),
    new Product('Harvey WeinFox', 696969, '../../assets/Fox.jpg'),
  ];

  constructor(private _dataService: DataService){
    this._dataService.updateProducts(this.products);
    this._dataService.productsObservable.subscribe( (products) => {
      this.products = products;
    });
  }

  


  
}
