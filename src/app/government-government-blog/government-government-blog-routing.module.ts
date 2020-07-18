import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GovernmentGovernmentBlogPage } from './government-government-blog.page';

const routes: Routes = [
  {
    path: '',
    component: GovernmentGovernmentBlogPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GovernmentGovernmentBlogPageRoutingModule {}
