import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';

import { ActualizaHabilidadPageRoutingModule } from './actualiza-habilidad-routing.module';

import { ActualizaHabilidadPage } from './actualiza-habilidad.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActualizaHabilidadPageRoutingModule,
    HttpClientModule
  ],
  declarations: [ActualizaHabilidadPage]
})
export class ActualizaHabilidadPageModule {}
