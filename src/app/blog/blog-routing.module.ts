import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blog.component';
import {BlogCardsComponent} from "./blog-cards/blog-cards.component";

const routes: Routes = [
  { path: ":postId", redirectTo: "/404"},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
