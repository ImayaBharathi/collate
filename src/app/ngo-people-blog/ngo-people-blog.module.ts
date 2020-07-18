import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

// import { NGOPeopleBlogPageRoutingModule } from './ngo-people-blog-routing.module';

import { NGOPeopleBlogPage } from './ngo-people-blog.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
    // NGOPeopleBlogPageRoutingModule
  ],
  declarations: [NGOPeopleBlogPage],
  entryComponents: [NGOPeopleBlogPage]
})
export class NGOPeopleBlogPageModule {}
