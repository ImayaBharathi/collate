import { Component } from '@angular/core';
import { LandingHomePage } from '../landing-home/landing-home.page';
import { GovernmentPeopleBlogPage } from '../government-people-blog/government-people-blog.page';
import { NGOPeopleBlogPage } from '../ngo-people-blog/ngo-people-blog.page';
import { PeopleGovernmentBlogPage } from '../people-government-blog/people-government-blog.page';
import { PeopleNGOBlogPage } from '../people-ngo-blog/people-ngo-blog.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  landing_home = LandingHomePage;
  government_people_blog = GovernmentPeopleBlogPage;
  ngo_people_blog=NGOPeopleBlogPage;
  people_government_blog = PeopleGovernmentBlogPage;
  people_ngo = PeopleNGOBlogPage;
  constructor() {}


}
