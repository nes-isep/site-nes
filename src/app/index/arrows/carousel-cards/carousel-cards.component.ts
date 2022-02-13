import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {ScullyRoute, ScullyRoutesService} from "@scullyio/ng-lib";
import {Observable} from "rxjs";

@Component({
  selector: 'app-carousel-cards',
  templateUrl: './carousel-cards.component.html',
  styleUrls: ['./carousel-cards.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CarouselCardsComponent implements OnInit{

  @Input() id: number | undefined;

  people: any[] = [];

  route: any;

  links$: Observable<ScullyRoute[]> = this.scully.available$;

  constructor(private scully: ScullyRoutesService) {}

  ngOnInit(): void{
    this.links$.subscribe((links) => {
      for(let i = 0; i < links.length; i++){
        if(links[i].route == "/blog/people-data"){
          this.route = links[i];
        }
      }
      this.people = this.route.people;
    });
  }

  // tslint:disable-next-line:use-lifecycle-interface
  ngOnChanges(): void {

    setTimeout(() => {
      // @ts-ignore
      document.getElementById('cards').innerHTML = '';
      // tslint:disable-next-line:prefer-for-of
      for (let i = 0; i <= this.people.length - 1; i++) {
        if (this.people[i].idCargo === this.id){
          // @ts-ignore
          document.getElementById('cards').innerHTML += '' +
            '<div style="display: inline-block; position: relative">\n' +
            '      <div class="our-team">\n' +
            '        <div class="picture">\n' +
            '          <img class="img-fluid" src="' + this.people[i].foto + '">\n' +
            '        </div>\n' +
            '        <div class="team-content">\n' +
            '          <h2 class="name">' + this.people[i].nome + '</h2>\n' +
            '          <hr>' +
            '          <h4 class="title">' + this.people[i].cargo + '</h4>\n' +
            '        </div>\n' +
            '        <ul class="social">\n' +
            '          <li><a href="' + this.people[i].linkedIn + '" class="fa fa-linkedin" aria-hidden="true"></a></li>\n' +
            '        </ul>\n' +
            '      </div>\n' +
            '</div>';
        }
      }
    }, 100)
  }

}

