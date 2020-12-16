import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { IonicModule } from '@ionic/angular';

import { ActualizaPerfilPageRoutingModule } from './actualiza-perfil-routing.module';

import { ActualizaPerfilPage } from './actualiza-perfil.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActualizaPerfilPageRoutingModule,
    HttpClientModule
  ],
  declarations: [ActualizaPerfilPage]
})
export class ActualizaPerfilPageModule {}
