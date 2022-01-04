import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog.component';
import { BlogCardsComponent } from './blog-cards/blog-cards.component';
import {ScullyLibModule} from "@scullyio/ng-lib";


@NgModule({
  declarations: [
    BlogComponent,
    BlogCardsComponent
  ],
  imports: [
    CommonModule, BlogRoutingModule, ScullyLibModule
  ]
})
export class BlogModule { }
