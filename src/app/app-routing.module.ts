import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {IndexComponentComponent} from "./index-component/index-component.component";
import {AboutComponent} from "./about/about.component";
import {NotFoundComponent} from "./not-found/not-found.component";

const routes: Routes = [
  {path: '', component: IndexComponentComponent},
  {path: 'about', component: AboutComponent},
  {path: 'notfound', component: NotFoundComponent},
  {path: '**', redirectTo: '/notfound'},
  { path: 'blog', loadChildren: () => import('./blog/blog.module').then(m => m.BlogModule) }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
