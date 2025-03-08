import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcceuilComponent } from './menus/acceuil/acceuil.component';
import { ContactComponent } from './menus/contact/contact.component';
import { DevComponent } from './components/dev/dev.component';
import { MarketingComponent } from './components/marketing/marketing.component';
import { GraphismeComponent } from './components/graphisme/graphisme.component';
import { MontVideoComponent } from './components/mont-video/mont-video.component';
import { ServicesComponent } from './menus/svces/services.component';
import { AProposComponent } from './menus/a-propos/a-propos.component';
import { BookCoachingComponent } from './components/book-coaching/book-coaching.component';
import { PaymentComponent } from './payment/payment.component';
import { PaypalCheckoutComponent } from './paypal-checkout/paypal-checkout.component';
import { PaymentSelectionComponent } from './payment-selection/payment-selection.component';

const routes: Routes = [
  { path: 'accueil', component: AcceuilComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'a-propos', component: AProposComponent },
  { path: 'dev', component: DevComponent },
  { path: 'marketing', component: MarketingComponent },
  { path: 'graphisme', component: GraphismeComponent },
  { path: 'mont-video', component: MontVideoComponent },
  { path: 'book-coaching', component: BookCoachingComponent},
  { path: 'services', component: ServicesComponent },
  { path: 'payment', component: PaymentComponent },
  { path: 'paypal-checkout', component: PaypalCheckoutComponent },
  { path: 'payment-selection', component: PaymentSelectionComponent },
  { path: '', redirectTo: '/accueil', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
