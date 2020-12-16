import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetallesVacantePage } from './detalles-vacante.page';

const routes: Routes = [
  {
    path: '',
    component: DetallesVacantePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetallesVacantePageRoutingModule {}
