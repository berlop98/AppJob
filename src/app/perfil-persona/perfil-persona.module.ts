import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { IonicModule } from '@ionic/angular';

import { PerfilPersonaPageRoutingModule } from './perfil-persona-routing.module';

import { PerfilPersonaPage } from './perfil-persona.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerfilPersonaPageRoutingModule,
    HttpClientModule
  ],
  declarations: [PerfilPersonaPage]
})
export class PerfilPersonaPageModule {}
