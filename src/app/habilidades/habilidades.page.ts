import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.page.html',
  styleUrls: ['./habilidades.page.scss'],
})
export class HabilidadesPage  {
  myInput:String

  constructor(private http:HttpClient, private storage:Storage) { }



  agrega(){
    this.storage.get('usuarioL').then((val) => {
      console.log("el usuario en sesion es", val );        //saco usuario en sesion
    
  
    this.http.post<any>('http://192.168.1.114:4000/api/habilidades', { idAspirante: val, descripcion:this.myInput }).subscribe(data => {
      console.log(data)
  })
  
    });
  }

}
