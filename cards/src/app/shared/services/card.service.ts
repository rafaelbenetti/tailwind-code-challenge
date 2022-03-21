import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom, Observable } from 'rxjs';

import { Card } from 'src/app/secure/top-cards/card.model'

@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor(private http: HttpClient) { }

  get(): Observable<Card[]> {
    return this.http.get<Card[]>('./assets/mock/cards.json');
  }

  getAsPromise(): Promise<Card[]> {
    return firstValueFrom(this.http.get<Card[]>('./assets/mock/cards.json'));
  }
}