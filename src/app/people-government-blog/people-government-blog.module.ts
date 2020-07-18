import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

// import { PeopleGovernmentBlogPageRoutingModule } from './people-government-blog-routing.module';

import { PeopleGovernmentBlogPage } from './people-government-blog.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
    // PeopleGovernmentBlogPageRoutingModule
  ],
  declarations: [PeopleGovernmentBlogPage],
  entryComponents: [PeopleGovernmentBlogPage]
})
export class PeopleGovernmentBlogPageModule {}
