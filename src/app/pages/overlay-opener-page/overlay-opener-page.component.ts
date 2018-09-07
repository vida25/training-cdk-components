import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'act-overlay-page-opener',
  templateUrl: './overlay-opener-page.component.html',
  styleUrls: ['./overlay-opener-page.component.scss']
})
export class OverlayOpenerPageComponent implements OnInit {

  isOpened = false;

  constructor() { }
  ngOnInit() {
  }

}
