import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { IonicModule } from '@ionic/angular';

import { CurriculumPageRoutingModule } from './curriculum-routing.module';

import { CurriculumPage } from './curriculum.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CurriculumPageRoutingModule,
    HttpClientModule
  ],
  declarations: [CurriculumPage]
})
export class CurriculumPageModule {}
