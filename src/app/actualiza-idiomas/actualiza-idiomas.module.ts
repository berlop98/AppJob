import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActualizaIdiomasPageRoutingModule } from './actualiza-idiomas-routing.module';

import { ActualizaIdiomasPage } from './actualiza-idiomas.page';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActualizaIdiomasPageRoutingModule,
    HttpClientModule
  ],
  declarations: [ActualizaIdiomasPage]
})
export class ActualizaIdiomasPageModule {}
