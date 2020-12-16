import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import{Router} from '@angular/router'
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-actualiza-idiomas',
  templateUrl: './actualiza-idiomas.page.html',
  styleUrls: ['./actualiza-idiomas.page.scss'],
})
export class ActualizaIdiomasPage implements OnInit {
  variable:any
  nombre:String
  nivel:String
  level:String
  lenguaje:String
  Idioma:Observable<any>
  currentDate = new Date()
  id:any=[]
  
 
 URL= 'http://192.168.1.114:4000/api/ActualizaIdioma/'

  constructor(private http:HttpClient, private storage: Storage, private router:Router,private route: ActivatedRoute) { }

  ngOnInit() {
    this.nombre = this.route.snapshot.paramMap.get('nombre')
    this.nivel = this.route.snapshot.paramMap.get('nivel')
 
  }

  Actualiza(){
      this.storage.get('usuarioL').then((val) => {
      console.log("el usuarioL es", val);
      let id = this.route.snapshot.paramMap.get('id')
      this.http.put(this.URL+val+'/'+id , {id_Idioma:this.lenguaje, porcentaje:this.level}).subscribe(data=>{
        console.log(data)
      })
      
    
    });
   
    
  }

  seleccionIdioma($event){
    this.lenguaje=$event.target.value
  }

  seleccionNivel($evento){
   this.level=$evento.target.value
  }


}
