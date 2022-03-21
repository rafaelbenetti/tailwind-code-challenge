import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecureRoutingModule } from './secure-routing.module';
import { TopCardsComponent } from './top-cards/top-cards.component';
import { CardService } from '../shared/services/card.service';


@NgModule({
  declarations: [
    TopCardsComponent
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
