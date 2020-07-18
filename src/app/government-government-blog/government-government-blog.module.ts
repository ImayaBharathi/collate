import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

// import { GovernmentGovernmentBlogPageRoutingModule } from './government-government-blog-routing.module';

import { GovernmentGovernmentBlogPage } from './government-government-blog.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
    // GovernmentGovernmentBlogPageRoutingModule
  ],
  declarations: [GovernmentGovernmentBlogPage],
  entryComponents: [GovernmentGovernmentBlogPage]
})
export class GovernmentGovernmentBlogPageModule {}
