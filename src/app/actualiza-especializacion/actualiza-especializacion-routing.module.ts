import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActualizaEspecializacionPage } from './actualiza-especializacion.page';

const routes: Routes = [
  {
    path: '',
    component: ActualizaEspecializacionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActualizaEspecializacionPageRoutingModule {}
