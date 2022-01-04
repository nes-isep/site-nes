import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
  providers: [NgbCarouselConfig]
})
export class CarouselComponent implements OnInit {

  images: any[]= ["../../../assets/186496939_954028915363232_9092926700184401413_n.png",
  "../../../assets/186515316_883701785542839_5669445439120829370_n.png"];
    // [700, 533, 807, 124].map((n) => `https://picsum.photos/id/700/900/500`);


  constructor(config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree

  }

  ngOnInit(): void {
  }



}
