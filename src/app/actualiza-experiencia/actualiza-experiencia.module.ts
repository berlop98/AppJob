import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { IonicModule } from '@ionic/angular';

import { ActualizaExperienciaPageRoutingModule } from './actualiza-experiencia-routing.module';

import { ActualizaExperienciaPage } from './actualiza-experiencia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActualizaExperienciaPageRoutingModule,
    HttpClientModule
  ],
  declarations: [ActualizaExperienciaPage]
})
export class ActualizaExperienciaPageModule {}
