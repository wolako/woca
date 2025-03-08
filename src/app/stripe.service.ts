import { Injectable } from '@angular/core';
import { loadStripe, Stripe } from '@stripe/stripe-js';

@Injectable({
  providedIn: 'root'
})
export class StripeService {
  private stripePromise: Promise<Stripe | null>;

  constructor() {
    this.stripePromise = loadStripe('pk_test_51PpY4zAjgM2rDd0CKI3n2HUAXhMjsz32D4Rw1i6AbHApIRm6XI9eom9E0X3ssfT6hBGEAQ4odW9Lx8UzcHJyC12Y00OpTBYwwj');
  }

  async getStripe() {
    return this.stripePromise;
  }
}
