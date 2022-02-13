import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import {ScullyRoute, ScullyRoutesService} from "@scullyio/ng-lib";
import {Observable} from "rxjs";

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
  providers: [NgbCarouselConfig]
})
export class CarouselComponent implements OnInit {

  images: any[] = [];

  links$: Observable<ScullyRoute[]> = this.scully.available$;

  constructor(private scully: ScullyRoutesService) {
  }

  ngOnInit(): void {
    this.links$.subscribe((links) => {
      for(let i = 0; i < links.length; i++){
        if(links[i].route == "/blog/carousel-data"){
          // @ts-ignore
          this.images = links[i].carousel;
        }
      }
      for(let i = 0; i < this.images.length; i++){
        if(this.images[i].active == true){
          // @ts-ignore
          document.getElementById('carousel-inner').innerHTML += '<div class="carousel-item active">\n' +
            '      <img src="' + this.images[i].imagePath + '" class="d-block w-100" alt="...">\n' +
            '      <div class="carousel-caption d-none d-md-block">\n' +
            '        <h5>' + this.images[i].title + '</h5>\n' +
            '        <p>' + this.images[i].subtitle + '</p>\n' +
            '      </div>\n' +
            '    </div>';
          // @ts-ignore
          document.getElementById('carousel-indicators').innerHTML += '<button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="' + i + '" class="active" aria-current="true" aria-label="Slide 1"></button>';
        } else {
          // @ts-ignore
          document.getElementById('carousel-inner').innerHTML += '<div class="carousel-item">\n' +
            '      <img src="' + this.images[i].imagePath + '" class="d-block w-100" alt="...">\n' +
            '      <div class="carousel-caption d-none d-md-block">\n' +
            '        <h5>' + this.images[i].title + '</h5>\n' +
            '        <p>' + this.images[i].subtitle + '</p>\n' +
            '      </div>\n' +
            '    </div>';
          // @ts-ignore
          document.getElementById('carousel-indicators').innerHTML += '<button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="' + i + '" aria-label="Slide 2"></button>';
        }
      }
    });
  }



}
