import { Component, OnInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-coaching',
  templateUrl: './book-coaching.component.html',
  styleUrls: ['./book-coaching.component.scss']
})
export class BookCoachingComponent implements OnInit {

  constructor(
    private viewportScroller: ViewportScroller,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.viewportScroller.scrollToPosition([0, 0]);
  }

  redirectToPaymentSelection() {
    this.router.navigate(['/payment-selection']);
  }
}
