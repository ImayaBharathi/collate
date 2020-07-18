import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

// import { NGONGOBlogPageRoutingModule } from './ngo-ngo-blog-routing.module';

import { NGONGOBlogPage } from './ngo-ngo-blog.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
    // NGONGOBlogPageRoutingModule
  ],
  declarations: [NGONGOBlogPage],
  entryComponents: [NGONGOBlogPage]
})
export class NGONGOBlogPageModule {}
