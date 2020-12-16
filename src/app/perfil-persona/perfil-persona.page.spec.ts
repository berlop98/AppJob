import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PerfilPersonaPage } from './perfil-persona.page';

describe('PerfilPersonaPage', () => {
  let component: PerfilPersonaPage;
  let fixture: ComponentFixture<PerfilPersonaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerfilPersonaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PerfilPersonaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
