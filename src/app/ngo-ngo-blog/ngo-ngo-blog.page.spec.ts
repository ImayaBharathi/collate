import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NGONGOBlogPage } from './ngo-ngo-blog.page';

describe('NGONGOBlogPage', () => {
  let component: NGONGOBlogPage;
  let fixture: ComponentFixture<NGONGOBlogPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NGONGOBlogPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NGONGOBlogPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
