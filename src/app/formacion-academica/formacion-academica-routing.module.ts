import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormacionAcademicaPage } from './formacion-academica.page';

const routes: Routes = [
  {
    path: '',
    component: FormacionAcademicaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormacionAcademicaPageRoutingModule {}
