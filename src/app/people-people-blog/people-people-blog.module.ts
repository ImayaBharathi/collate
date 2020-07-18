import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

// import { PeoplePeopleBlogPageRoutingModule } from './people-people-blog-routing.module';

import { PeoplePeopleBlogPage } from './people-people-blog.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
    // PeoplePeopleBlogPageRoutingModule
  ],
  declarations: [PeoplePeopleBlogPage],
  entryComponents: [PeoplePeopleBlogPage]
})
export class PeoplePeopleBlogPageModule {}
