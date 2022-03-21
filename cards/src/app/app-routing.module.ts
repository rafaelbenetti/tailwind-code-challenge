import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './shared/guards/auth-guard';
import { PublicComponent } from './layouts/public/public.component';
import { SecureComponent } from './layouts/secure/secure.component';

const routes: Routes = [
  { 
    path: '', 
    component: SecureComponent, 
    canActivate: [AuthGuard], loadChildren: () => import('./secure/secure.module').then(m => m.SecureModule) 
  },
  { 
    path: '', 
    component: PublicComponent, 
    loadChildren: () => import('./public/public.module').then(m => m.PublicModule) 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
