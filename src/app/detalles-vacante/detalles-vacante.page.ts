import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { DatePipe } from '@angular/common';
import{Router} from '@angular/router'

import { Observable } from 'rxjs';

@Component({
  selector: 'app-detalles-vacante',
  templateUrl: './detalles-vacante.page.html',
  styleUrls: ['./detalles-vacante.page.scss'],
  providers: [DatePipe]
})
export class DetallesVacantePage implements OnInit {
  variable:any
  detalles:Observable<any>
  detallesPersona:Observable<any>
  currentDate = new Date()
  id:any=[]
  id2:any=[]
  datos:any=[]
  persona:any=[]
  RFC:String
  tipo:String
  URL='http://192.168.1.114:4000/api/detallesVacante/'
  URL2='http://192.168.1.114:4000/api/perso/'
  URL3='http://192.168.1.114:4000/api/Moral/'
  constructor(private route: ActivatedRoute, private router: Router, private http:HttpClient,private storage: Storage, private datePipe: DatePipe) {}

  ngOnInit() {
    
    let id = this.route.snapshot.paramMap.get('id')
    console.log(id)
    this.detalles=this.http.get(this.URL+id)
    this.detalles.subscribe((data)=>{
      this.datos=data
      this.datos.forEach(element=>{
      this.RFC=element.RFC_persona
      
      })
      console.log(this.RFC)
      this.detallesPersona=this.http.get(this.URL3+this.RFC)
      this.consultaPersonas(this.RFC)
    })

   
    
  

 
 
  }

  postula(){
    this.storage.get('usuarioL').then((val) => {
      console.log("el usuario en sesion es", val );
      let id = this.route.snapshot.paramMap.get('id')
    
    console.log("el id de la vacante es " + id)
    let latest_date =this.datePipe.transform(this.currentDate, 'yyyy-MM-dd');
    console.log(latest_date)
    this.http.post<any>('http://192.168.1.114:4000/api/postulacion', { id_vacante: id, id_aspirante:val,fecha_postulacion:latest_date, estatus_postulacion:'N' }).subscribe(data => {
      console.log(data)
  })
  
    });
    
  
  }

  regresa(){
    this.router.navigateByUrl('/menu');
  }

  consultaPersonas(RFC:String){
    this.http.get(this.URL2+RFC).subscribe((data)=>{
      this.persona=data
      this.persona.forEach(element=>{
        this.tipo=element.tipo
        
      })
      console.log(this.tipo)
      this.consultaDatosPersona(this.tipo , RFC)
    })
    

  }

  consultaDatosPersona(tipo:String , RFC:String){
    if(tipo=='moral'){
     this.detallesPersona = this.http.get(this.URL3+RFC)
    }
  }

  Perfil($rfc, $Tipo){
    this.router.navigate(['/perfil-persona', { RFC:$rfc, tipo:$Tipo }])

  }

 

}
