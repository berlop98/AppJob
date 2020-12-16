import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Storage } from '@ionic/storage';
import{Router} from '@angular/router'
import { Observable } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  Aspirantes:Observable<any>;
  URL='http://192.168.1.114:4000/api/aspirantes/'
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router,
    private storage: Storage,
    private http:HttpClient

  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.DatosAspirante();
    });
   
  }

  CerrarSesion(){
    this.router.navigateByUrl('/home');
    this.storage.clear 

  }

  DatosAspirante(){
    this.storage.get('usuarioL').then((val) => {
      console.log("el usuarioL es", val);
      this.Aspirantes =  this.http.get(this.URL+val)
  });
}
}
