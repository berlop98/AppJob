import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import{Router} from '@angular/router'


@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage {

  constructor(private http:HttpClient,private router: Router,private storage:Storage) { }

  onSubmit(data){
    this.http.post('http://localhost:4000/aspirantes', data).toPromise().then((data:any)=>{
      console.log(data)
      

    })
   
    //console.warn(data)
    this.storage.set("usuarioL", data.idAspirante)
    this.router.navigateByUrl('/formacion-academica');
    
   
  }



  

}
