import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FisicasPage } from './fisicas.page';

const routes: Routes = [
  {
    path: '',
    component: FisicasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FisicasPageRoutingModule {}
