import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { CardService } from 'src/app/shared/services/card.service';
import { getRandomDate } from 'src/app/shared/utils/date.utils';
import { Card } from '../top-cards/card/card.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  cards$: Observable<Card[]>;
  cards: Card[];
  subscription: Subscription;

  constructor(private cardService: CardService) { 
    this.cards$ = this.cardService.get();
  }

  ngOnInit(): void {
    this.subscription = this.cards$
      .subscribe(cards => {
        this.cards = cards.map(card => {
          return {
            ...card,
            createdDate: getRandomDate()
          }
        })
      });
  }

  ngOnDestroy(): void {
    if (this.subscription && !this.subscription.closed) {
      this.subscription.unsubscribe();
    }
  }
}
