import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NGOPeopleBlogPage } from './ngo-people-blog.page';

const routes: Routes = [
  {
    path: '',
    component: NGOPeopleBlogPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NGOPeopleBlogPageRoutingModule {}
