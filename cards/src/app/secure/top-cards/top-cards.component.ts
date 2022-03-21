import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CardService } from 'src/app/shared/services/card.service';

@Component({
  selector: 'app-top-cards',
  templateUrl: './top-cards.component.html',
  styleUrls: ['./top-cards.component.scss']
})
export class TopCardsComponent implements AfterViewInit {

  subscription?: Subscription;

  constructor(private cardService: CardService) { }

  ngAfterViewInit(): void {
    this.subscription = this.cardService.get()
      .subscribe(cards => {
        console.log(cards);
      });
  }

  ngOnDestroy(): void {
    if (this.subscription && !this.subscription.closed) {
      this.subscription.unsubscribe();
    }
  }
}
