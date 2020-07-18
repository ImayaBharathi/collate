import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

// import { PeopleNGOBlogPageRoutingModule } from './people-ngo-blog-routing.module';

import { PeopleNGOBlogPage } from './people-ngo-blog.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
    // PeopleNGOBlogPageRoutingModule
  ],
  declarations: [PeopleNGOBlogPage],
  entryComponents: [PeopleNGOBlogPage]
})
export class PeopleNGOBlogPageModule {}
