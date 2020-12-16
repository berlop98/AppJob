import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ActualizaExperienciaPage } from './actualiza-experiencia.page';

describe('ActualizaExperienciaPage', () => {
  let component: ActualizaExperienciaPage;
  let fixture: ComponentFixture<ActualizaExperienciaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActualizaExperienciaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ActualizaExperienciaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
