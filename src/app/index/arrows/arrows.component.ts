import {Component, OnInit, Output} from '@angular/core';
import {departamentosDTO} from "./departamentosDTO";
import {Observable} from "rxjs";
import {ScullyRoute, ScullyRoutesService} from "@scullyio/ng-lib";

@Component({
  selector: 'app-arrows',
  templateUrl: './arrows.component.html',
  styleUrls: ['./arrows.component.css']
})
export class ArrowsComponent implements OnInit {

  id: number = -1;

  departamentos: departamentosDTO[] = [];

  links$: Observable<ScullyRoute[]> = this.scully.available$;

  route: any;

  constructor(private scully: ScullyRoutesService) {}

  ngOnInit(): void {
    // debug current pages
    this.links$.subscribe((links) => {
      for(let i = 0; i < links.length; i++){
        if(links[i].route == "/blog/card-data"){
          this.route = links[i];
          this.departamentos = this.route.departments;
        }
      }
    });
    this.id = 0;
  }

  // tslint:disable-next-line:typedef
  public prevDepartamento() {
    // @ts-ignore
    this.id--;
    // @ts-ignore
    if (this.id < 0){
      this.id = 2;
    }
  }
  // tslint:disable-next-line:typedef
  public nextDepartamento() {
    // @ts-ignore
    this.id++;
    // @ts-ignore
    if (this.id > this.departamentos.length - 1){
      this.id = 0;
    }
  }

}
