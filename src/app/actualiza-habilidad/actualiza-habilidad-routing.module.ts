import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActualizaHabilidadPage } from './actualiza-habilidad.page';

const routes: Routes = [
  {
    path: '',
    component: ActualizaHabilidadPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActualizaHabilidadPageRoutingModule {}
