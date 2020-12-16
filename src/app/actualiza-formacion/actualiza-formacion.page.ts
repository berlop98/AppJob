import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import{Router} from '@angular/router'
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-actualiza-formacion',
  templateUrl: './actualiza-formacion.page.html',
  styleUrls: ['./actualiza-formacion.page.scss'],
})
export class ActualizaFormacionPage implements OnInit {
  variable:any
  Forma:Observable<any>
  currentDate = new Date()
  id:any=[]
  
 URL= 'http://192.168.1.114:4000/api/formaciones/'
 URL2= 'http://192.168.1.114:4000/api/ActualizaFormacion/'

  constructor(private http:HttpClient, private storage: Storage, private router:Router,private route: ActivatedRoute) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id')
    console.log(id)
    this.Forma=this.http.get(this.URL+id)
  }

  Actualiza(data){
   
    let id = this.route.snapshot.paramMap.get('id')
    this.http.put(this.URL2+id, data).subscribe(data=>{
      console.log(data)
    })
  }

}
