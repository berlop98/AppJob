import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-idiomas',
  templateUrl: './idiomas.page.html',
  styleUrls: ['./idiomas.page.scss'],
})
export class IdiomasPage {
  idiomas=[
    {
      idioma:"Ingles",
      id:1
    },
    {
      idioma:"mandarin",
      id:2
    }
  ]
  lenguaje:String=""
  nivel:number=0

  constructor(private http:HttpClient, private storage:Storage) { }

  a(){
   
    this.storage.get('usuarioL').then((val) => {
      console.log("el usuario en sesion es", val );        //saco usuario en sesion
    
  
    this.http.post<any>('http://192.168.1.114:4000/api/idiomas', { id_Idioma: this.lenguaje, id_Aspirante:val,porcentaje:this.nivel }).subscribe(data => {
      console.log(data)
  })
  
    });
    
  
   
  }
  seleccionIdioma($event){
    this.lenguaje=$event.target.value
  }

  seleccionNivel($evento){
   this.nivel=$evento.target.value
  }

}
