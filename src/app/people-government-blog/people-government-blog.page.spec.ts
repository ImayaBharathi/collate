import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PeopleGovernmentBlogPage } from './people-government-blog.page';

describe('PeopleGovernmentBlogPage', () => {
  let component: PeopleGovernmentBlogPage;
  let fixture: ComponentFixture<PeopleGovernmentBlogPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeopleGovernmentBlogPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PeopleGovernmentBlogPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
