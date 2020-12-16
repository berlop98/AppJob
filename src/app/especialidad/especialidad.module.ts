import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { IonicModule } from '@ionic/angular';

import { EspecialidadPageRoutingModule } from './especialidad-routing.module';

import { EspecialidadPage } from './especialidad.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EspecialidadPageRoutingModule,
    HttpClientModule
  ],
  declarations: [EspecialidadPage]
})
export class EspecialidadPageModule {}
