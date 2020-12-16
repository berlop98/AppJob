import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import{Router} from '@angular/router'

@Component({
  selector: 'app-especialidad',
  templateUrl: './especialidad.page.html',
  styleUrls: ['./especialidad.page.scss'],
})
export class EspecialidadPage  {

  constructor(private http:HttpClient, private storage:Storage,private router: Router) { }

  onSubmit(data){
    this.storage.get('usuarioL').then((valor) => {
      console.log("el usuario es", valor);
     console.log(data.institucion, data.area_trabajo, data.nombre_especializacion, data.periodo_inicio)
     this.http.post('http://localhost:4000/especializacion', { institucion: data.institucion , area_estudio:data.area_estudio , nombre_especializacion:data.nombre_especializacion, periodo_inicio:data.periodo, periodo_termino:data.periodo_termino, idAspirante:valor }).subscribe((data)=>{
       console.log(data)
     })
     
    });

   // this.http.post('http://localhost:4000/especializacion', { institucion: data.institucion , area_estudio:data.area_estudio , nombre_especializacion:data.nombre_especializacion, periodo_inicio:data.periodo, periodo_termino:data.periodo_termino, idAspirante: }).toPromise().then((data:any)=>{
     // console.log(data)
      
    //})
   
    //console.warn(data)
    this.router.navigateByUrl('/curriculum');
    
   
  }

 
}
