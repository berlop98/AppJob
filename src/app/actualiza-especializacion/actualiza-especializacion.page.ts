import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import{Router} from '@angular/router'
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-actualiza-especializacion',
  templateUrl: './actualiza-especializacion.page.html',
  styleUrls: ['./actualiza-especializacion.page.scss'],
})
export class ActualizaEspecializacionPage implements OnInit {
  institucion:String
  area:String
  nombre:String
  inicio:String
  termino:String
  URL= 'http://192.168.1.114:4000/api/ActualizaEspecialidad/'

  constructor(private http:HttpClient, private storage: Storage, private router:Router,private route: ActivatedRoute) { }

  ngOnInit() {
    this.institucion = this.route.snapshot.paramMap.get('institucion')
    this.area = this.route.snapshot.paramMap.get('area')
    this.nombre = this.route.snapshot.paramMap.get('nombre')
    this.inicio = this.route.snapshot.paramMap.get('inicio')
    this.termino = this.route.snapshot.paramMap.get('termino')
  }

  Actualiza(data){
    console.log(data)
    let id = this.route.snapshot.paramMap.get('id')
    this.http.put(this.URL+id, data).subscribe(dat=>{
      console.log(dat)
    })
    
  }

}
