import { Component, OnInit } from '@angular/core';
import { loadScript } from '@paypal/paypal-js';

@Component({
  selector: 'app-paypal-checkout',
  templateUrl: './paypal-checkout.component.html',
  styleUrls: ['./paypal-checkout.component.scss']
})
export class PaypalCheckoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }

  async initializePayPal() {
    const paypal = await loadScript({ "clientId": "AYpuJLN5CankpdQaAW-K3vgEKvGoIwjuBj8282MHHjUhEydeOPNfFpZhorCMd4eyqGfWEzbSoqMSR_qU" });
  
    if (paypal && typeof paypal.Buttons === 'function') {
      paypal.Buttons({
        createOrder: (data: any, actions: any) => {
          return actions.order.create({
            purchase_units: [{
              amount: {
                value: '1.00'
              }
            }]
          });
        },
        onApprove: (data: any, actions: any) => {
          return actions.order.capture().then((details: any) => {
            alert('Transaction completed by ' + details.payer.name.given_name);
          });
        },
        onError: (err: any) => {
          console.error('Erreur lors du paiement:', err);
        }
      }).render('#paypal-button-container');
    } else {
      console.error('PayPal SDK failed to load or Buttons function is unavailable.');
    }
  }
  
  // async initializePayPal() {
  //   // Charger le script PayPal
  //   const { PayPalButtons } = await loadScript({
  //     clientId: 'AYpuJLN5CankpdQaAW-K3vgEKvGoIwjuBj8282MHHjUhEydeOPNfFpZhorCMd4eyqGfWEzbSoqMSR_qU', // Remplacez YOUR_CLIENT_ID par votre vrai ID client
  //     currency: 'USD'
  //   });

  //   // Créer et afficher le bouton PayPal
  //   this.renderPayPalButton(PayPalButtons);
  // }

  renderPayPalButton(PayPalButtons: any) {
    if (PayPalButtons) {
      const paypalContainer = document.getElementById('paypal-button-container');
      if (paypalContainer) {
        new PayPalButtons({
          createOrder: (data: any, actions: any) => {
            return actions.order.create({
              purchase_units: [{
                amount: {
                  value: '1.00' // Remplacez par le montant réel
                }
              }]
            });
          },
          onApprove: (data: any, actions: any) => {
            return actions.order.capture().then((details: any) => {
              // Afficher un message de succès
              const statusElement = document.getElementById('payment-status');
              if (statusElement) {
                statusElement.textContent = `Transaction complétée par ${details.payer.name.given_name}`;
              }
              // Vous pouvez rediriger l'utilisateur ou effectuer d'autres actions après la réussite de la transaction
            });
          },
          onError: (err: any) => {
            console.error('Erreur lors du paiement:', err);
            const statusElement = document.getElementById('payment-status');
            if (statusElement) {
              statusElement.textContent = 'Une erreur est survenue lors du paiement.';
            }
          }
        }).render('#paypal-button-container'); // Le bouton PayPal sera monté ici
      }
    } else {
      console.error('Le module PayPal Buttons n\'a pas pu être chargé.');
    }
  }

}
