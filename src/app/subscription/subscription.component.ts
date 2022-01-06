import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.scss']
})
export class SubscriptionComponent implements OnInit {

  switch: boolean = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  subscribePlan()
  {
    this.switch = true;
  }

  navigateBack()
  {
    this.router.navigateByUrl('/member-register');
  }

}
