import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import{Router} from '@angular/router'
@Component({
  selector: 'app-curriculum',
  templateUrl: './curriculum.page.html',
  styleUrls: ['./curriculum.page.scss'],
})
export class CurriculumPage implements OnInit {
  Aspirantes:Observable<any>;
  Experiencia:Observable<any>;
  Especialidad:Observable<any>;
  Formacion:Observable<any>;
  Idioma:Observable<any>;
  Habilidad:Observable<any>;
  prueba:String
  idioma:String
  hab:String
  exp:String
  esp:String
  formaciones:String
  IDUsuario:any=[];
  IDUsuario2:any=[];
  URL='http://192.168.1.114:4000/api/aspirantes/' 
  URL2='http://192.168.1.114:4000/api/experiencias/' 
  URL3='http://192.168.1.114:4000/api/forma/' 
  URL4='http://192.168.1.114:4000/api/idiomas/' 
  URL5='http://192.168.1.114:4000/api/habilidades/' 
  URL6='http://192.168.1.114:4000/api/especialidad/' 
  constructor(private http:HttpClient, private storage: Storage, private router:Router) { }

  ngOnInit() {
    this.traeDatos()

  }

  traeDatos(){
    this.storage.get('usuarioL').then((val) => {
      console.log("el usuarioL es", val);
      this.Aspirantes =  this.http.get(this.URL+val)
      this.Experiencia =  this.http.get(this.URL2+val)
       this.Especialidad= this.http.get(this.URL6+val)
      this.Formacion= this.http.get(this.URL3+val)
      this.Idioma = this.http.get(this.URL4 + val)
      this.Habilidad = this.http.get(this.URL5 + val)
     
    this.Formacion.subscribe(result=>{
      if(!result.length){
        this.formaciones='vacio'
      }
      else{
        this.formaciones='lleno'
      }
      console.log(this.formaciones)
    })

    this.Idioma.subscribe(result=>{
      if(!result.length){
        this.idioma='vacio'
      }
      else{
        this.idioma='lleno'
      }
    })

    this.Habilidad.subscribe(result=>{
      if(!result.length){
        this.hab='vacio'
      }
      else{
        this.hab='lleno'
      }
    })

    this.Experiencia.subscribe(result=>{
      if(!result.length){
        this.exp='vacio'
      }
      else{
        this.exp='lleno'
      }
      
    })

    this.Especialidad.subscribe(result=>{
      if(!result.length){
        this.esp='vacio'
      }
      else{
        this.esp='lleno'
      }
     
    })

     
      
   




      
    
    });

  }

  p(){
    console.log("defrt")
  }

  AgregaExperiencia(){
    this.router.navigate(['/experiencia'])
  }
  AgregaHabilidades(){
    this.router.navigate(['/habilidades'])
  }

  AgregaIdioma(){
    this.router.navigate(['/idiomas'])
  }

  AgregaFormacion(){
    this.router.navigate(['/formacion-academica'])
  }




  AgregaEspecialidad(){
    this.router.navigate(['/especialidad'])
  }

  ActualizaFormacion($idFormacion){
 
    this.router.navigate(['/actualiza-formacion', { id: $idFormacion }])
  }

  ActualizaPerfil($idAspirante){
 
    this.router.navigate(['/actualiza-perfil', { id: $idAspirante }])
  }

  ActualizaIdioma($idIdioma, $porcentaje , $Nombre){
 
    this.router.navigate(['/actualiza-idiomas', { id: $idIdioma , nivel:$porcentaje , nombre:$Nombre }])
  }
  
  ActualizaHabilidad($Descripcion, $ID){
 
    this.router.navigate(['/actualiza-habilidad', { descripcion: $Descripcion , id:$ID }])
  }

  ActualizaExperiencia($ID, $Empresa, $Cargo, $Estado, $Ciudad, $Inicio, $Termino){
 
    this.router.navigate(['/actualiza-experiencia', { empresa:$Empresa, cargo:$Cargo, estado:$Estado, ciudad:$Ciudad, inicio:$Inicio, termino:$Termino, id:$ID }])
  }

  ActualizaEspecializacion($ID,$Institucion, $Area, $Nombre,  $Inicio, $Termino){
 
    this.router.navigate(['/actualiza-especializacion', { institucion:$Institucion, area:$Area, nombre:$Nombre, inicio:$Inicio,  termino:$Termino , id:$ID }])
  }
  
  
  

}
