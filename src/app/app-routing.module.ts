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

const routes: Routes = [
  { path: 'accueil', component: AcceuilComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'a-propos', component: AProposComponent },
  { path: 'dev', component: DevComponent },
  { path: 'marketing', component: MarketingComponent },
  { path: 'graphisme', component: GraphismeComponent },
  { path: 'mont-video', component: MontVideoComponent },
  { path: 'services', component: ServicesComponent},
  { path: '', redirectTo: '/accueil', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
