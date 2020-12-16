import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MoralesPage } from './morales.page';

describe('MoralesPage', () => {
  let component: MoralesPage;
  let fixture: ComponentFixture<MoralesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoralesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MoralesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
