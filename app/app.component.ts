import { Component } from 'angular2/core';
import { HTTP_PROVIDERS } from 'angular2/http';
import { ROUTER_PROVIDERS, ROUTER_DIRECTIVES, RouteConfig } from 'angular2/router';

// Load all features. When a module is imported all the javascript associated is executed. In this way we load all the observable features.
import 'rxjs/Rx'; 

import { ProductListComponent } from './products/product-list.component';
import { ProductDetailComponent } from './products/product-detail.component';
import { WelcomeComponent } from './home/welcome.component';
import { ProductService } from './products/product.service';

@Component({
  selector: 'pm-app',
  template: `
    <div>
      <nav class="navbar navbar-light bg-faded">
        <a class="navbar-brand" href="#">{{pageTitle}}</a>

        <ul class="nav navbar-nav">
          <li class="nav-item active">
            <a class="nav-link" [routerLink]="['Welcome']">Home <span class="sr-only">(current)</span></a>
          </li>

          <li class="nav-item">
            <a class="nav-link" [routerLink]="['Products']">Product List <span class="sr-only">(current)</span></a>
          </li>
        </ul>
      </nav>

      <div class="container">
        <router-outlet></router-outlet>
      </div>
    </div>
  `,
  directives: [ROUTER_DIRECTIVES],
  providers: [ProductService, 
              HTTP_PROVIDERS,
              ROUTER_PROVIDERS]
})
@RouteConfig([
  {
    path: '/welcome',
    name: 'Welcome',
    component: WelcomeComponent,
    useAsDefault: true
  },
  {
    path: '/products',
    name: 'Products',
    component: ProductListComponent
  },
  {
    path: '/product/:id',
    name: 'ProductDetail',
    component: ProductDetailComponent
  }
])
export class AppComponent {
  pageTitle: string = 'Acme Product Management';
}
