import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  getProducts(): Observable<Product[]> {
    //Return products from the api
    return of([
      {
        name: 'iPhone',
        stock: true,
        quantity: 2,
        description: 'Product description',
        price: 899
      },
      {
        name: 'iPad',
        stock: true,
        quantity: 2,
        description: 'Product description',
        price: 1099
      }
    ])
  }
}
