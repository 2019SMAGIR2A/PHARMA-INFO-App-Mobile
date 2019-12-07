import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetailPharmaciePage } from './detail-pharmacie.page';

describe('DetailPharmaciePage', () => {
  let component: DetailPharmaciePage;
  let fixture: ComponentFixture<DetailPharmaciePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailPharmaciePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetailPharmaciePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
