import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import{Router} from '@angular/router'
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-perfil-persona',
  templateUrl: './perfil-persona.page.html',
  styleUrls: ['./perfil-persona.page.scss'],
})
export class PerfilPersonaPage implements OnInit {
  RFC:String
  tipo:String
  moral:String
  fisica:String
  URL='http://192.168.1.114:4000/api/perso/'
  URL2='http://192.168.1.114:4000/api/Moral/'
  URL3='http://192.168.1.114:4000/api/Fisica/'
  Persona:Observable<any>;
  Moral:Observable<any>;
  Fisica:Observable<any>;

  constructor(private http:HttpClient, private storage: Storage, private router:Router,private route: ActivatedRoute) { }

  ngOnInit() {
    this.RFC = this.route.snapshot.paramMap.get('RFC')
    this.tipo = this.route.snapshot.paramMap.get('tipo')
    console.log(this.RFC , this.tipo)
    this.Persona=this.http.get(this.URL+this.RFC)

    if(this.tipo=='moral'){
      this.Moral=this.http.get(this.URL2+this.RFC)
      this.moral='true'
    }

    if(this.tipo=='fisica'){
      this.Fisica=this.http.get(this.URL3+this.RFC)
      this.fisica='true'
    }

  }

}
