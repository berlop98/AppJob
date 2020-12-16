import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MoralesPage } from './morales.page';

const routes: Routes = [
  {
    path: '',
    component: MoralesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MoralesPageRoutingModule {}
