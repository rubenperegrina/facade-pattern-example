import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EcommerceComponent } from './components/ecommerce/ecommerce.component';
import { ECommerceFacade } from './facade/ecommerce.facade';

@NgModule({
  declarations: [
    EcommerceComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [ECommerceFacade],
  exports: [EcommerceComponent]
})
export class EcommerceModule { }
