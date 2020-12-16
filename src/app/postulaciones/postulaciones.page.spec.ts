import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PostulacionesPage } from './postulaciones.page';

describe('PostulacionesPage', () => {
  let component: PostulacionesPage;
  let fixture: ComponentFixture<PostulacionesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostulacionesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PostulacionesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
