import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FisicasPageRoutingModule } from './fisicas-routing.module';

import { FisicasPage } from './fisicas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FisicasPageRoutingModule
  ],
  declarations: [FisicasPage]
})
export class FisicasPageModule {}
