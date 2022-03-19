import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/models/order';

@Component({
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css'],
})
export class PipeComponent implements OnInit {
  order: Order = {
    firstName: 'Harun',
    lastName: 'Durak',
    orderDate: new Date(),
    currency: 1,
    total: 135.9845,
    orderStatus: 'Shipped',
  };

  constructor() {}

  ngOnInit(): void {}
}
