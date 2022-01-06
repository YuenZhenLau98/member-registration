import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'member-register',
    loadChildren: () => import('./member-register/member-register.module').then(m => m.MemberRegisterModule)
  },
  {
    path: 'subscription',
    loadChildren: () => import('./subscription/subscription.module').then(m => m.SubscriptionModule)
  },
  {
    path: '',
    redirectTo: 'member-register',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
