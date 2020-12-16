import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import{Router} from '@angular/router'
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-actualiza-habilidad',
  templateUrl: './actualiza-habilidad.page.html',
  styleUrls: ['./actualiza-habilidad.page.scss'],
})
export class ActualizaHabilidadPage implements OnInit  {
  URL= 'http://192.168.1.114:4000/api/ActualizaHabilidad/'
  describe:String
  descripcion:String
  constructor(private http:HttpClient, private storage: Storage, private router:Router,private route: ActivatedRoute) { }

  ngOnInit() {
    this.descripcion = this.route.snapshot.paramMap.get('descripcion')
   
 
  }
  Actualiza(){
    let id = this.route.snapshot.paramMap.get('id')
    this.http.put(this.URL+id, {descripcion:this.describe}).subscribe(data=>{
      console.log(data)
    })
  }
  
  
    
 
 
  
}


