import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { IonicModule } from '@ionic/angular';

import { ActualizaEspecializacionPageRoutingModule } from './actualiza-especializacion-routing.module';

import { ActualizaEspecializacionPage } from './actualiza-especializacion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActualizaEspecializacionPageRoutingModule,
    HttpClientModule
  ],
  declarations: [ActualizaEspecializacionPage]
})
export class ActualizaEspecializacionPageModule {}
