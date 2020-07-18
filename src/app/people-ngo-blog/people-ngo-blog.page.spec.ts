import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PeopleNGOBlogPage } from './people-ngo-blog.page';

describe('PeopleNGOBlogPage', () => {
  let component: PeopleNGOBlogPage;
  let fixture: ComponentFixture<PeopleNGOBlogPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeopleNGOBlogPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PeopleNGOBlogPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
