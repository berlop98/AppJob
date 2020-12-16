import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActualizaFormacionPage } from './actualiza-formacion.page';

const routes: Routes = [
  {
    path: '',
    component: ActualizaFormacionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActualizaFormacionPageRoutingModule {}
