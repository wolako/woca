import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment-selection',
  templateUrl: './payment-selection.component.html',
  styleUrls: ['./payment-selection.component.scss']
})
export class PaymentSelectionComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  selectPaypal() {
    this.router.navigate(['/paypal-checkout']);
  }

  selectStripe() {
    this.router.navigate(['/payment']);
  }

}
