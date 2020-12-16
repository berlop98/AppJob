import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import{Router} from '@angular/router'
import{AlertController} from '@ionic/angular'
import { ToastController } from '@ionic/angular';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage  {
  URL='http://192.168.1.114:4000/api/contrasena/'
  URL2='http://192.168.1.114:4000/api/aspirantes/'
  Aspirantes:Observable<any>
  contra:any=[]
  verificaContrasena:boolean=false

  constructor(private http:HttpClient, private storage: Storage, private router: Router,private toast:ToastController) { }

  
  onLogin(dato){
   this.Aspirantes= this.http.get(this.URL2+dato.idAspirante)
   this.Aspirantes.subscribe(async result=>{
    if(!result.length){
      const t = await this.toast.create({
        message: 'Usuario o Contraseña incorrectos',
        duration: 5000
      });
      t.present();
    }
    
    else{
      this.http.get(this.URL+dato.idAspirante).subscribe((data)=>{
        this.contra=data
        this.contra.forEach(async element => {
          if(element.Password==dato.contrasena){
            this.storage.set("usuarioL", dato.idAspirante)
            this.storage.get('usuarioL').then((valor) => {
              console.log("el usuario es", valor);
             
            });
        
            //this.storage.remove("usuarioL");
            this.router.navigateByUrl('/menu')
          }
          else{
            const t = await this.toast.create({
              message: 'Usuario o Contraseña incorrectos',
              duration: 5000
            });
            t.present();
             
          }
        }) 
      })
    }
    
  })
    
  
    
    
    //this.http.post('http://localhost:4000/aspirantes', data).toPromise().then((data:any)=>{
      //console.log(data)
    //})
   
    //console.warn(data)
 
    
   
  }

}
