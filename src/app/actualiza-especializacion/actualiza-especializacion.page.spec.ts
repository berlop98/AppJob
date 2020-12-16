import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ActualizaEspecializacionPage } from './actualiza-especializacion.page';

describe('ActualizaEspecializacionPage', () => {
  let component: ActualizaEspecializacionPage;
  let fixture: ComponentFixture<ActualizaEspecializacionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActualizaEspecializacionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ActualizaEspecializacionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
