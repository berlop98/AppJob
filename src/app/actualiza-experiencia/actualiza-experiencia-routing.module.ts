import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActualizaExperienciaPage } from './actualiza-experiencia.page';

const routes: Routes = [
  {
    path: '',
    component: ActualizaExperienciaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActualizaExperienciaPageRoutingModule {}
