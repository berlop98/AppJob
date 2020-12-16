import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import{Router} from '@angular/router'

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.page.html',
  styleUrls: ['./experiencia.page.scss'],
})
export class ExperienciaPage  {

  constructor(private http:HttpClient, private storage:Storage,private router: Router) { }

  onSubmit(data){
    this.storage.get('usuarioL').then((valor) => {
      console.log("el usuario es", valor);
        this.http.post('http://localhost:4000/experiencia', { empresa: data.empresa , cargo_ocupado:data.cargo_ocupado , estado:data.estado, ciudad:data.ciudad, fecha_inicio:data.periodo, fecha_termino:data.periodo_termino, idAspirante:valor }).toPromise().then((data:any)=>{
      console.log(data)
      
    })
     
    });

   // this.http.post('http://localhost:4000/formacion', { institucion: data.institucion , nivel_estudio:data.nivel_estudio , area_estudio:data.area_estudio, periodo_inicio:data.periodo, periodo_termino:data.periodo_termino, idAspirante: }).toPromise().then((data:any)=>{
     // console.log(data)
      
    //})
   
    //console.warn(data)
    this.router.navigateByUrl('/curriculum');
    
   
  }

}
