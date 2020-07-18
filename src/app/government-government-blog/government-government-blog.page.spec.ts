import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GovernmentGovernmentBlogPage } from './government-government-blog.page';

describe('GovernmentGovernmentBlogPage', () => {
  let component: GovernmentGovernmentBlogPage;
  let fixture: ComponentFixture<GovernmentGovernmentBlogPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GovernmentGovernmentBlogPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GovernmentGovernmentBlogPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
