import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PeoplePeopleBlogPage } from './people-people-blog.page';

describe('PeoplePeopleBlogPage', () => {
  let component: PeoplePeopleBlogPage;
  let fixture: ComponentFixture<PeoplePeopleBlogPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeoplePeopleBlogPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PeoplePeopleBlogPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
