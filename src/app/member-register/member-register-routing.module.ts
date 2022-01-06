import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MemberRegisterComponent } from './member-register.component';

const routes: Routes = [
  {
    path: '',
    component: MemberRegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MemberRegisterRoutingModule { }
