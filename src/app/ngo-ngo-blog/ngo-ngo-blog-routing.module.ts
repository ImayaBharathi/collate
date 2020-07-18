import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NGONGOBlogPage } from './ngo-ngo-blog.page';

const routes: Routes = [
  {
    path: '',
    component: NGONGOBlogPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NGONGOBlogPageRoutingModule {}
