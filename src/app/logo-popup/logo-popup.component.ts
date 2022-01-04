import {ChangeDetectionStrategy, Component, HostListener, OnInit} from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';
// import {NgxScrollEvent} from 'ngx-scroll-event';

@Component({
  selector: 'app-logo-popup',
  templateUrl: './logo-popup.component.html',
  styleUrls: ['./logo-popup.component.css'],
  animations: [
    trigger('openClose', [
      state('open', style({
        opacity: 1
      })),
      state('closed', style({
        opacity: 0
      })),
      transition('open => closed', [
        animate('1s')
      ]),
      transition('closed => open', [
        animate('0.5s')
      ]),
    ]),
  ]
})
export class LogoPopupComponent implements OnInit {

  isOpen = true;

  // tslint:disable-next-line:typedef
  /*public handleScroll(event: NgxScrollEvent) {
    console.log('scroll occurred', event.originalEvent);
    if (event.isReachingBottom) {
      console.log(`the user is reaching the bottom`);
    }
    if (event.isReachingTop) {
      console.log(`the user is reaching the top`);
    }
    if (event.isWindowEvent) {
      console.log(`This event is fired on Window not on an element.`);
    }

  }*/


  constructor() { }

  ngOnInit(): void {
  }

}
