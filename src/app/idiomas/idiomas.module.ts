import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { IonicModule } from '@ionic/angular';

import { IdiomasPageRoutingModule } from './idiomas-routing.module';

import { IdiomasPage } from './idiomas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IdiomasPageRoutingModule,
    HttpClientModule
  ],
  declarations: [IdiomasPage]
})
export class IdiomasPageModule {}
