import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { SuperTabsModule } from '@ionic-super-tabs/angular';
import { GovernmentGovernmentBlogPageModule } from '../government-government-blog/government-government-blog.module';
import { GovernmentPeopleBlogPageModule } from '../government-people-blog/government-people-blog.module';
import { LandingHomePageModule } from '../landing-home/landing-home.module';
import { NGOPeopleBlogPageModule } from '../ngo-people-blog/ngo-people-blog.module';
import { NGONGOBlogPageModule } from '../ngo-ngo-blog/ngo-ngo-blog.module';
import { PeopleNGOBlogPageModule } from '../people-ngo-blog/people-ngo-blog.module';
import { PeoplePeopleBlogPageModule } from '../people-people-blog/people-people-blog.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    SuperTabsModule,
    GovernmentGovernmentBlogPageModule,
    GovernmentPeopleBlogPageModule,
    LandingHomePageModule,
    NGOPeopleBlogPageModule,
    NGONGOBlogPageModule,
    PeopleNGOBlogPageModule,
    PeoplePeopleBlogPageModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
