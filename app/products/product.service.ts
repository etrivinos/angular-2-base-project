import { Http, Response } from 'angular2/http';
import { Observable } from 'rxjs/Observable';

import { Injectable } from 'angular2/core';
import { IProduct } from './product';

@Injectable()
export class ProductService {
	private _productUrl: string = '../../api/products/products.json';

	constructor(private _http: Http) {}

	getProducts() : Observable<IProduct[]> {
		return this._http.get(this._productUrl)
			.map((response: Response) => <IProduct[]>response.json())
			.do(data => console.log('All ' + JSON.stringify(data)))
			.catch(this.handleError);
	}
	
	private handleError(error: Response) {
		console.log(error);
		return Observable.throw(error.json().error || 'Server error');
	}
}