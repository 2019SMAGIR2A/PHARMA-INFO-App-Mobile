import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListPharmaciesPage } from './list-pharmacies.page';

describe('ListPharmaciesPage', () => {
  let component: ListPharmaciesPage;
  let fixture: ComponentFixture<ListPharmaciesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListPharmaciesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListPharmaciesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
