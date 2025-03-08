import { Component, OnInit } from '@angular/core';
import { StripeService } from '../stripe.service';
import { StripeCardElement, StripeElements, StripeElementsOptions } from '@stripe/stripe-js';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
  stripeElements!: StripeElements;
  card!: StripeCardElement;
  elementsOptions: StripeElementsOptions = {
    locale: 'auto'
  };

  constructor(
    private stripeService: StripeService,
    private viewportScroller: ViewportScroller
  ) {}

  async ngOnInit() {
    this.viewportScroller.scrollToPosition([0, 0]);
    const stripe = await this.stripeService.getStripe();
    if (stripe) {
      this.stripeElements = stripe.elements();
      this.card = this.stripeElements.create('card');
      this.card.mount('#card-element');
    }
  }

  async pay(event: Event) {
    event.preventDefault();
    const stripe = await this.stripeService.getStripe();
    if (stripe && this.card) {
      const { token, error } = await stripe.createToken(this.card);
      if (error) {
        const displayError = document.getElementById('card-errors');
        if (displayError) {
          displayError.textContent = error.message ?? 'An unknown error occurred';
        }
      } else {
        // Envoyer le token à votre backend si nécessaire
        console.log('Token généré :', token);
      }
    }
  }

  async checkout() {
    const stripe = await this.stripeService.getStripe();
    if (stripe) {
      const { error } = await stripe.redirectToCheckout({
        lineItems: [
          { price: 'prod_Qi4gDfaiF7N30b', quantity: 1 },
          { price: 'prod_Qi69OwxE1KyyUu', quantity: 1 }
        ],
        mode: 'payment',
        successUrl: window.location.origin + '/success',
        cancelUrl: window.location.origin + '/cancel'
      });
  
      if (error) {
        console.error('Error:', error.message ?? 'An unknown error occurred during checkout');
      }
    }
  }  
   
}
