import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NGOPeopleBlogPage } from './ngo-people-blog.page';

describe('NGOPeopleBlogPage', () => {
  let component: NGOPeopleBlogPage;
  let fixture: ComponentFixture<NGOPeopleBlogPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NGOPeopleBlogPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NGOPeopleBlogPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
