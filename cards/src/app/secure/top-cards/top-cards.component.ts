import { AfterViewInit, Component, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { getRandomDate } from 'src/app/shared/utils/date.utils';
import { Card } from './card/card.model';

@Component({
  selector: 'app-top-cards',
  templateUrl: './top-cards.component.html',
  styleUrls: ['./top-cards.component.scss']
})
export class TopCardsComponent implements AfterViewInit {

  @Input() cards: Card[];
  subscription?: Subscription;

  constructor() { }
  
  ngAfterViewInit(): void {
    this.cards?.sort((a,b) => b.createdDate?.getTime() - a.createdDate?.getTime());

    const mappedCards = this.cards?.map(card => {
      return {
        ...card,
        updatedDate: getRandomDate()
      }
    });

    console.log('MAPPED CARDS:', mappedCards);
  }
}
