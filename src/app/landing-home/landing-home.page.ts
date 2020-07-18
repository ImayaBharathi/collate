import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-home',
  templateUrl: './landing-home.page.html',
  styleUrls: ['./landing-home.page.scss'],
})

export class LandingHomePage implements OnInit {
  
  people: any[] = [
    {
      "like":"17",
      "name":"GovernA ",
      "title": "Douglas  Pace",
      "description":"Founded in 1829 on an isthmus between Lake Monona and Lake Mendota, Madison was named the capital of the Wisconsin Territory in 1836."
    },
    {
      "like":"910",
      "name":"NGOB",
      "title": "Mcleod  Mueller",
      "description":"Keep close to Nature's heart... and break clear away, once in awhile,\
      and climb a mountain or spend a week in the woods. Wash your spirit clean.\
      and climb a mountain or spend a week in the woods. Wash your spirit clean."
    },
    {
      "like":"412",
      "name":"GovernC",
      "title": "Day  Meyers",
      "description":"Keep close to Nature's heart... and break clear away, once in awhile,\
      and climb a mountain or spend a week in the woods. Wash your spirit clean.\
      and climb a mountain or spend a week in the woods. Wash your spirit clean."
    },
    {
      "like":"45",
      "name":"NGOD",
      "title": "Aguirre  Ellis",
      "description":"Keep close to Nature's heart... and break clear away, once in awhile,\
      and climb a mountain or spend a week in the woods. Wash your spirit clean.\
      and climb a mountain or spend a week in the woods. Wash your spirit clean."
    },
    {

      "like":"67",
      "name":"GovernE",
      "title": "Cook  Tyson",
      "description":"Keep close to Nature's heart... and break clear away, once in awhile,\
      and climb a mountain or spend a week in the woods. Wash your spirit clean.\
      and climb a mountain or spend a week in the woods. Wash your spirit clean."
    },
    {
      "like":"45",
      "name":"NGOF",
      "title": "Cook  Tyson",
      "description":"Keep close to Nature's heart... and break clear away, once in awhile,\
      and climb a mountain or spend a week in the woods. Wash your spirit clean.\
      and climb a mountain or spend a week in the woods. Wash your spirit clean."
    }
  ];
  

  constructor() { 
     
  }
  
    
  ngOnInit() {
    
  }

}
