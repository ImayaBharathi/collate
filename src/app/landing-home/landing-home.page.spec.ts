import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LandingHomePage } from './landing-home.page';

describe('LandingHomePage', () => {
  let component: LandingHomePage;
  let fixture: ComponentFixture<LandingHomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingHomePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LandingHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
