import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import{Router} from '@angular/router'
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router'


@Component({
  selector: 'app-actualiza-experiencia',
  templateUrl: './actualiza-experiencia.page.html',
  styleUrls: ['./actualiza-experiencia.page.scss'],
})
export class ActualizaExperienciaPage implements OnInit {
  empresaa:String
  cargo:String
  estado:String
  ciudadd:String
  inicio:String
  termino:String
  URL= 'http://192.168.1.114:4000/api/ActualizaExperiencia/'
  constructor(private http:HttpClient, private storage: Storage, private router:Router,private route: ActivatedRoute) { }

  ngOnInit() {
  
    this.empresaa = this.route.snapshot.paramMap.get('empresa')
    this.cargo = this.route.snapshot.paramMap.get('cargo')
    this.estado = this.route.snapshot.paramMap.get('estado')
    this.ciudadd = this.route.snapshot.paramMap.get('ciudad')
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
