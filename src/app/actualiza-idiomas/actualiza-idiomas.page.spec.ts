import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ActualizaIdiomasPage } from './actualiza-idiomas.page';

describe('ActualizaIdiomasPage', () => {
  let component: ActualizaIdiomasPage;
  let fixture: ComponentFixture<ActualizaIdiomasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActualizaIdiomasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ActualizaIdiomasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
