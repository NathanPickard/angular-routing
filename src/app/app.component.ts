import { Component, OnInit } from '@angular/core';
import { ProductServices } from './services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent /*implements OnInit*/ {

  //   products: any;

  //   constructor(private router: Router, private productServices: ProductServices) { }

  //   ngOnInit() {
  //     this.products = this.productServices.productList();
  //   }

  //   show(id) {
  //     this.router.navigate(['details', id, 'Fred', { foo: 'foo2', me: 'Nate' }])

  //   }


}
