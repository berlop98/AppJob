import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetallesVacantePage } from './detalles-vacante.page';

describe('DetallesVacantePage', () => {
  let component: DetallesVacantePage;
  let fixture: ComponentFixture<DetallesVacantePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetallesVacantePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetallesVacantePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
