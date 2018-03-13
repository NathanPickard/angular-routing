import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products.component';
import { DetailsComponent } from './details/details.component';
import { InstructionsComponent } from '../instructions/instructions.component';
import { ProductServices } from '../services/product.service';
import { SharedModule } from '../shared/shared.module';

const productRoutes: Routes = [
  {
    path: '', component: ProductsComponent,
    children: [
      { path: '', component: InstructionsComponent },
      { path: 'details/:id', component: DetailsComponent }
    ]
  },
]
@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(productRoutes)
  ],
  declarations: [ProductsComponent,
    DetailsComponent],
  providers: [ProductServices]
})
export class ProductsModule { }