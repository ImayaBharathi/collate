import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  // {
  //   path: 'landing-home',
  //   loadChildren: () => import('./landing-home/landing-home.module').then( m => m.LandingHomePageModule)
  // },
  // {
  //   path: 'government-people-blog',
  //   loadChildren: () => import('./government-people-blog/government-people-blog.module').then( m => m.GovernmentPeopleBlogPageModule)
  // },
  // {
  //   path: 'people-government-blog',
  //   loadChildren: () => import('./people-government-blog/people-government-blog.module').then( m => m.PeopleGovernmentBlogPageModule)
  // },
  // {
  //   path: 'people-people-blog',
  //   loadChildren: () => import('./people-people-blog/people-people-blog.module').then( m => m.PeoplePeopleBlogPageModule)
  // },
  // {
  //   path: 'government-government-blog',
  //   loadChildren: () => import('./government-government-blog/government-government-blog.module').then( m => m.GovernmentGovernmentBlogPageModule)
  // },
  // {
  //   path: 'ngo-people-blog',
  //   loadChildren: () => import('./ngo-people-blog/ngo-people-blog.module').then( m => m.NGOPeopleBlogPageModule)
  // },
  // {
  //   path: 'ngo-ngo-blog',
  //   loadChildren: () => import('./ngo-ngo-blog/ngo-ngo-blog.module').then( m => m.NGONGOBlogPageModule)
  // },
  // {
  //   path: 'people-ngo-blog',
  //   loadChildren: () => import('./people-ngo-blog/people-ngo-blog.module').then( m => m.PeopleNGOBlogPageModule)
  // },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
