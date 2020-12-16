import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import{Router} from '@angular/router'
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-actualiza-perfil',
  templateUrl: './actualiza-perfil.page.html',
  styleUrls: ['./actualiza-perfil.page.scss'],
})

export class ActualizaPerfilPage implements OnInit {
  variable:any
  Usuario:Observable<any>
  currentDate = new Date()
  id:any=[]
  
 URL2= 'http://192.168.1.114:4000/api/ActualizaPerfil/'
 
 URL= 'http://192.168.1.114:4000/api/Aspirantes/'

  constructor(private http:HttpClient, private storage: Storage, private router:Router,private route: ActivatedRoute) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id')
    console.log(id)
    this.Usuario=this.http.get(this.URL+id)
  }

  Actualiza(data){
    console.log(data)
    this.storage.get('usuarioL').then((val) => {
      console.log("el usuarioL es", val);
      this.http.put(this.URL2+val, data).subscribe((dat)=>{
        console.log(dat)
      })
      
      
    
    });
    
  }

}
