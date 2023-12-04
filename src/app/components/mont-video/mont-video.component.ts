import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mont-video',
  templateUrl: './mont-video.component.html',
  styleUrls: ['./mont-video.component.scss']
})
export class MontVideoComponent implements OnInit {

  constructor(private viewportScroller: ViewportScroller) { }

  ngOnInit(): void {
    this.viewportScroller.scrollToPosition([0, 0]);
  }

}
