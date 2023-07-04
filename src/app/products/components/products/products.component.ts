import { Component, OnInit, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../../models/product.model';
import { ProductsFacade } from '../../facades/products.facade';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html'
})
export class ProductsComponent implements OnInit {
  products$!: Observable<Product[]>;

  productsFacade = inject(ProductsFacade)

  ngOnInit(): void {
    this.products$ = this.productsFacade.getProducts();
  }
}
