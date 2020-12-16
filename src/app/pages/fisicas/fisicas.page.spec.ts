import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FisicasPage } from './fisicas.page';

describe('FisicasPage', () => {
  let component: FisicasPage;
  let fixture: ComponentFixture<FisicasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FisicasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FisicasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
