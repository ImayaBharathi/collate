import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

// import { GovernmentPeopleBlogPageRoutingModule } from './government-people-blog-routing.module';

import { GovernmentPeopleBlogPage } from './government-people-blog.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
    // GovernmentPeopleBlogPageRoutingModule
  ],
  declarations: [GovernmentPeopleBlogPage],
  entryComponents: [GovernmentPeopleBlogPage]
})
export class GovernmentPeopleBlogPageModule {}
