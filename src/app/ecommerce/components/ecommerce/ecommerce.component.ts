import { Component, inject } from '@angular/core';
import { ECommerceFacade } from '../../facade/ecommerce.facade';

@Component({
  selector: 'app-ecommerce',
  templateUrl: './ecommerce.component.html'
})
export class EcommerceComponent {

  ecommerceFacade = inject(ECommerceFacade)

  placeOrder() {
    this.ecommerceFacade.placeOrder('product_id', 5);
  }
}
