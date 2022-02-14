import { Component, OnInit } from '@angular/core';
import {ScullyRoute, ScullyRoutesService} from "@scullyio/ng-lib";
import {Observable} from "rxjs";
@Component({
  selector: 'app-sub-banner-material',
  templateUrl: './sub-banner-material.component.html',
  styleUrls: ['./sub-banner-material.component.css']
})
export class SubBannerMaterialComponent implements OnInit {

  descriptionsArray: any[] = [];

  route: any;

  links$: Observable<ScullyRoute[]> = this.scully.available$;

  constructor(private scully: ScullyRoutesService) {
  }

  ngOnInit(): void {

    this.links$.subscribe((links) => {
      for(let i = 0; i < links.length; i++){
        if(links[i].route == "/blog/updates-data"){
          // @ts-ignore
          this.descriptionsArray = links[i].updates;
        }
      }
      console.log(this.descriptionsArray)
    });

  }

}
