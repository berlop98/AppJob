import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { IonicModule } from '@ionic/angular';

import { ExperienciaPageRoutingModule } from './experiencia-routing.module';

import { ExperienciaPage } from './experiencia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExperienciaPageRoutingModule,
    HttpClientModule
  ],
  declarations: [ExperienciaPage]
})
export class ExperienciaPageModule {}
