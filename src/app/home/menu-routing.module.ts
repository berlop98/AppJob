import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuPage } from '../menu/menu.page';


const routes: Routes = [
  {
    path: 'tabs',
    component: MenuPage,
    children: [
      {
        path: 'morales',
        children: [
          {
            path: '',
            loadChildren:()=>import('../pages/morales/morales.module').then(m=>m.MoralesPageModule)
          }
        ]
      },
      {
        path: 'fisicas',
        children: [
            {
              path: 'fisicas',
              loadChildren:()=>import('../pages/fisicas/fisicas.module').then(m=>m.FisicasPageModule)
            }
          ]

      
      },
      {
          path:'',
          redirectTo:'/tabs/morales',
          pathMatch:'full'
      }

    ]
  }
];

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})

export class MenuRoutingModule{}