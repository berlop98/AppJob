import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActualizaIdiomasPage } from './actualiza-idiomas.page';

const routes: Routes = [
  {
    path: '',
    component: ActualizaIdiomasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActualizaIdiomasPageRoutingModule {}
