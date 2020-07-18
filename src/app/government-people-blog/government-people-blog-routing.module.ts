import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GovernmentPeopleBlogPage } from './government-people-blog.page';

const routes: Routes = [
  {
    path: '',
    component: GovernmentPeopleBlogPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GovernmentPeopleBlogPageRoutingModule {}
