import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FormacionAcademicaPage } from './formacion-academica.page';

describe('FormacionAcademicaPage', () => {
  let component: FormacionAcademicaPage;
  let fixture: ComponentFixture<FormacionAcademicaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormacionAcademicaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FormacionAcademicaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
