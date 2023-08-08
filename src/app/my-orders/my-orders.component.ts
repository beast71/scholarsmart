import { Component, OnInit } from '@angular/core';
import { order } from '../models/data-type';
import { ProductService } from '../product.service'; 

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html', // Adjust the path if needed
  styleUrls: ['./my-orders.component.css']
})

export class MyOrdersComponent implements OnInit {

  orderData: order[] | undefined;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getOrderList();
  }

  cancelOrder(orderId: number | undefined) {
    if (orderId) {
      this.productService.cancelOrder(orderId).subscribe((result: any) => {
        if (result) {
          this.getOrderList();
        }
      });
    }
  }

  getOrderList() {
    this.productService.orderList().subscribe((result: any) => {
      this.orderData = result;
    });
  }
}
