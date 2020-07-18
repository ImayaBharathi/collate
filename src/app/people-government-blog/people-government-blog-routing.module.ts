import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PeopleGovernmentBlogPage } from './people-government-blog.page';

const routes: Routes = [
  {
    path: '',
    component: PeopleGovernmentBlogPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PeopleGovernmentBlogPageRoutingModule {}
