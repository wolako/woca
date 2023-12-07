import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './navbar/header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AcceuilComponent } from './menus/acceuil/acceuil.component';
import { ContactComponent } from './menus/contact/contact.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DevComponent } from './components/dev/dev.component';
import { MarketingComponent } from './components/marketing/marketing.component';
import { GraphismeComponent } from './components/graphisme/graphisme.component';
import { MontVideoComponent } from './components/mont-video/mont-video.component';
import { ServicesComponent } from './menus/svces/services.component';
import { AProposComponent } from './menus/a-propos/a-propos.component';
import { SolutionsComponent } from './solutions/solutions.component';
import { AtoutComponent } from './atout/atout.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AcceuilComponent,
    ContactComponent,
    DevComponent,
    MarketingComponent,
    GraphismeComponent,
    MontVideoComponent,
    ServicesComponent,
    AProposComponent,
    SolutionsComponent,
    AtoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
