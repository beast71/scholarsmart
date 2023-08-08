import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { order } from './models/data-type';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  cancelOrder(orderId: number): Observable<any> {
    const url = `/api/orders/${orderId}/cancel`; // Replace with your API endpoint
    return this.http.post(url, null);
  }
  
  orderList(): Observable<order[]> {
    const url = '/api/orders';
  
    return this.http.get<order[]>(url); // Use <order[]> for the response type
  }
  
}
