import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import {  map } from 'rxjs/operators';

import { IProduct } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private productUrl = 'api/products/products.json';
  private data = [
    {
      'productId': 1,
      'productName': 'some pddddroduct',
      'shop': 'shop 1',
      'availability': 'available',
      'description': 'odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt',
      'price': 19.95,
      'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/5555'
    },
    {
      'productId': 2,
      'productName': 'product auf',
      'shop': 'shop 2',
      'availability': 'available',
      'description': 'odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt',
      'price': 32.99,
      'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/5556'
    },
    {
      'productId': 5,
      'productName': 'consequuntur',
      'shop': 'shop 1',
      'availability': 'not available',
      'description': 'odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt',
      'price': 8.9,
      'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/5556'
    },
    {
      'productId': 8,
      'productName': 'voluptatem',
      'shop': 'shop 1',
      'availability': 'not available',
      'description': 'odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt',
      'price': 11.55,
      'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/5559'
    },
    {
      'productId': 10,
      'productName': 'nesciunt',
      'shop': 'shop 1',
      'availability': 'available',
      'description': 'odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt',
      'price': 35.95,
      'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/5559'
    }
  ];


  constructor() { }

  getProducts(): Observable<any> {
    return of(this.data);
    // return this.http.get<IProduct[]>(this.productUrl).pipe(
    //   tap(data => console.log('All: ' + JSON.stringify(data))),
    //   catchError(this.handleError)
    // );
  }

  getProduct(id: number): Observable<IProduct | undefined> {
    return this.getProducts().pipe(
      map((products: IProduct[]) => products.find(p => p.productId === id))
    );
  }

  // private handleError(err: HttpErrorResponse) {
  //   let errorMessage = '';
  //   if (err.error instanceof ErrorEvent) {
  //     errorMessage = `An error occurred: ${err.error.message}`;
  //   } else {
  //     errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
  //   }
  //   console.error(errorMessage);
  //   return throwError(errorMessage);
  // }
}
