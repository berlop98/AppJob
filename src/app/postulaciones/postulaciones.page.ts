import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';  
import { Storage } from '@ionic/storage';
import { switchMap } from 'rxjs/operators'
import{Router} from '@angular/router'

@Component({
  selector: 'app-postulaciones',
  templateUrl: './postulaciones.page.html',
  styleUrls: ['./postulaciones.page.scss'],
})
export class PostulacionesPage implements OnInit {
  prueba:String="S"
  postu:Observable<any>;
  IDUsuario:any=[];
  UsuarioSesion:number;
  cargoUsuario:String
  URL='http://192.168.1.114:4000/api/aspirantes/' 
  URLPOSTULACIONES='http://192.168.1.114:4000/api/misPostulaciones/' 
  variable='albañileria'

  constructor(private http:HttpClient, private storage: Storage , private router:Router) { }

  ngOnInit() {
    this.storage.get('usuarioL').then((val) => {
      console.log("el usuarioL es", val);
      this.UsuarioSesion=val
      this.traePostulaciones(val)
      
    
    }); 
    
  }

  traePostulaciones(usuario:number){
    this.postu = this.http.get(this.URLPOSTULACIONES+usuario)
  }

  regresar(){
    this.router.navigateByUrl('/menu');
  }

}
