import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { IonicModule } from '@ionic/angular';

import { ActualizaFormacionPageRoutingModule } from './actualiza-formacion-routing.module';

import { ActualizaFormacionPage } from './actualiza-formacion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActualizaFormacionPageRoutingModule,
    HttpClientModule
  ],
  declarations: [ActualizaFormacionPage]
})
export class ActualizaFormacionPageModule {}
