import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { IonicModule } from '@ionic/angular';


import { DetallesVacantePageRoutingModule } from './detalles-vacante-routing.module';

import { DetallesVacantePage } from './detalles-vacante.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetallesVacantePageRoutingModule,
    HttpClientModule
  ],
  declarations: [DetallesVacantePage]
})
export class DetallesVacantePageModule {}
