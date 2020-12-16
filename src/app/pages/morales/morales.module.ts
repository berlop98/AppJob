import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MoralesPageRoutingModule } from './morales-routing.module';

import { MoralesPage } from './morales.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MoralesPageRoutingModule
  ],
  declarations: [MoralesPage]
})
export class MoralesPageModule {}
