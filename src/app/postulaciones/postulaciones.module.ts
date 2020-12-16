import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { IonicModule } from '@ionic/angular';

import { PostulacionesPageRoutingModule } from './postulaciones-routing.module';

import { PostulacionesPage } from './postulaciones.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PostulacionesPageRoutingModule,
    HttpClientModule
  ],
  declarations: [PostulacionesPage]
})
export class PostulacionesPageModule {}
