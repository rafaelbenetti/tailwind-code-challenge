import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopCardsComponent } from './top-cards/top-cards.component';

const routes: Routes = [
  { path: '', redirectTo: 'cards', pathMatch: 'full' },
  { path: 'cards', component: TopCardsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecureRoutingModule { }
