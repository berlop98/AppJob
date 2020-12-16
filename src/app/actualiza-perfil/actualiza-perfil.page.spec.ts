import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ActualizaPerfilPage } from './actualiza-perfil.page';

describe('ActualizaPerfilPage', () => {
  let component: ActualizaPerfilPage;
  let fixture: ComponentFixture<ActualizaPerfilPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActualizaPerfilPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ActualizaPerfilPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
