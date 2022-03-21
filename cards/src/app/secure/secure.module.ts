import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecureRoutingModule } from './secure-routing.module';
import { TopCardsComponent } from './top-cards/top-cards.component';
import { CardService } from '../shared/services/card.service';
import { CardComponent } from './top-cards/card/card.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    TopCardsComponent,
    CardComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    SecureRoutingModule
  ],
  providers: [
    CardService
  ]
})
export class SecureModule { }
