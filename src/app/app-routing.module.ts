import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },

  {path: 'login',
  loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
},
{
  path: 'detalles-vacante',
  loadChildren: () => import('./detalles-vacante/detalles-vacante.module').then( m => m.DetallesVacantePageModule)
},
{
  path: 'menu',
  loadChildren: () => import('./menu/menu.module').then( m => m.MenuPageModule)
},
{
  path: 'postulaciones',
  loadChildren: () => import('./postulaciones/postulaciones.module').then( m => m.PostulacionesPageModule)
},

{
  path: 'registro',
  loadChildren: () => import('./registro/registro.module').then( m => m.RegistroPageModule)
},
  {
    path: 'formacion-academica',
    loadChildren: () => import('./formacion-academica/formacion-academica.module').then( m => m.FormacionAcademicaPageModule)
  },
  {
    path: 'experiencia',
    loadChildren: () => import('./experiencia/experiencia.module').then( m => m.ExperienciaPageModule)
  },
  {
    path: 'idiomas',
    loadChildren: () => import('./idiomas/idiomas.module').then( m => m.IdiomasPageModule)
  },
  {
    path: 'curriculum',
    loadChildren: () => import('./curriculum/curriculum.module').then( m => m.CurriculumPageModule)
  },
  {
    path: 'actualiza-formacion',
    loadChildren: () => import('./actualiza-formacion/actualiza-formacion.module').then( m => m.ActualizaFormacionPageModule)
  },
  {
    path: 'actualiza-idiomas',
    loadChildren: () => import('./actualiza-idiomas/actualiza-idiomas.module').then( m => m.ActualizaIdiomasPageModule)
  },
  {
    path: 'habilidades',
    loadChildren: () => import('./habilidades/habilidades.module').then( m => m.HabilidadesPageModule)
  },
  {
    path: 'actualiza-habilidad',
    loadChildren: () => import('./actualiza-habilidad/actualiza-habilidad.module').then( m => m.ActualizaHabilidadPageModule)
  },
  {
    path: 'actualiza-experiencia',
    loadChildren: () => import('./actualiza-experiencia/actualiza-experiencia.module').then( m => m.ActualizaExperienciaPageModule)
  },
  {
    path: 'especialidad',
    loadChildren: () => import('./especialidad/especialidad.module').then( m => m.EspecialidadPageModule)
  },
  {
    path: 'actualiza-especializacion',
    loadChildren: () => import('./actualiza-especializacion/actualiza-especializacion.module').then( m => m.ActualizaEspecializacionPageModule)
  },
  {
    path: 'morales',
    loadChildren: () => import('./pages/morales/morales.module').then( m => m.MoralesPageModule)
  },
  {
    path: 'fisicas',
    loadChildren: () => import('./pages/fisicas/fisicas.module').then( m => m.FisicasPageModule)
  },
  {
    path: 'perfil-persona',
    loadChildren: () => import('./perfil-persona/perfil-persona.module').then( m => m.PerfilPersonaPageModule)
  },
  {
    path: 'actualiza-perfil',
    loadChildren: () => import('./actualiza-perfil/actualiza-perfil.module').then( m => m.ActualizaPerfilPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
