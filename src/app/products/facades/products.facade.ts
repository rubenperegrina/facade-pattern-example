import { Injectable, inject } from "@angular/core";
import { BehaviorSubject, Observable, tap } from "rxjs";
import { Product } from "../models/product.model";
import { ProductsService } from "../services/products.service";

@Injectable({
    providedIn: 'root'
})
export class ProductsFacade {
    private _productsService = inject(ProductsService);
    private _products = new BehaviorSubject<Product[]>([]);
    public products$ = this._products.asObservable();

    public getProducts(): Observable<Product[]> {
        return this._productsService.getProducts().pipe(
            tap((products) => this._products.next(products))
        );
    }
}