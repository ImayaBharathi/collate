import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PeopleNGOBlogPage } from './people-ngo-blog.page';

const routes: Routes = [
  {
    path: '',
    component: PeopleNGOBlogPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PeopleNGOBlogPageRoutingModule {}
