import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: any[] = [];

  constructor(
    private http: HttpClient
  ) { }

  addToCart(product: any) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    let aux = this.items;
    this.items = [];
    return aux;
  }

  getShippingPrices() {
    return this.http.get<{ type: string, price: number }>("/assets/shipping.json");
  }
}
