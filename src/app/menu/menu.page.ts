import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';  
import { Observable } from 'rxjs';
import { Storage } from '@ionic/storage';
import{Router} from '@angular/router'
@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  Aspirantes:Observable<any>;
  IDUsuario:any=[];
  IDUsuario2:number;
  cargoUsuario:String
  estado:String
  URL='http://192.168.1.114:4000/api/aspirantes/' 
  URLVACANTES='http://192.168.1.114:4000/api/vacantesEstado/'
  URL2='http://192.168.1.114:4000/api/vacantes/'  
  
  variable='albañileria'

  constructor(private http:HttpClient, private storage: Storage,  private router: Router) { 
    //this.SetValue()
    //this.getValue()
  }



  ngOnInit() {
    this.storage.get('usuarioL').then((val) => {
      console.log("el usuarioL es", val);
      this.IDUsuario2=val
      this.getDatosUuario()
      
    
    });  

    
  
  
  }
  getDatosUuario(){
    this.http.get(this.URL+this.IDUsuario2).subscribe((data)=>{
      this.IDUsuario=data
      console.log(this.IDUsuario)
      console.log("bien" + this.IDUsuario2)
     this.IDUsuario.forEach(element => {
        this.cargoUsuario=element.Area_trabajo
        this.estado=element.estado
        //console.log("el cargo del usuario es" + this.cargoUsuario)
      });
     console.log("el area es" + this.cargoUsuario) 
    this.Aspirantes =  this.http.get(this.URLVACANTES+this.estado+'/'+this.cargoUsuario)
     
      
    })

    

    
    
  

  }

  SetValue(){
    this.storage.set("usuario", "beto")
    console.log(this.storage.get("usuario"))
  }

  getValue(){
    this.storage.get('usuario').then((val) => {
      console.log("el usuario es", val);
      this.IDUsuario=val;
    });
    
  

}

Detalles($aspirante){
 
  this.router.navigate(['/detalles-vacante', { id: $aspirante }])
}

countryChange($event) {                                    //busca vacantes por estado
  console.log($event.target.value) ;
 
  this.Aspirantes =  this.http.get('http://192.168.1.114:4000/api/vacantesEstado/'+$event.target.value)
}

}
