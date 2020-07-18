import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GovernmentPeopleBlogPage } from './government-people-blog.page';

describe('GovernmentPeopleBlogPage', () => {
  let component: GovernmentPeopleBlogPage;
  let fixture: ComponentFixture<GovernmentPeopleBlogPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GovernmentPeopleBlogPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GovernmentPeopleBlogPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
