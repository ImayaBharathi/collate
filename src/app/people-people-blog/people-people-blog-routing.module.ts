import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PeoplePeopleBlogPage } from './people-people-blog.page';

const routes: Routes = [
  {
    path: '',
    component: PeoplePeopleBlogPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PeoplePeopleBlogPageRoutingModule {}
