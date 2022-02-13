import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {ScullyRoute, ScullyRoutesService} from "@scullyio/ng-lib";

@Component({
  selector: 'app-index-component',
  templateUrl: './index-component.component.html',
  styleUrls: ['./index-component.component.css']
})
export class IndexComponentComponent implements OnInit {
  constructor() {}

  ngOnInit() {
  }

}
