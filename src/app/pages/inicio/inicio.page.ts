import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingController, NavController, ToastController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { Usuario } from 'src/app/app.component';
import { DbService } from 'src/app/services/db.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit { 





  
  correo: string;
  contrasena: string;

  constructor(private router:Router, private navCtrl: NavController, private route:ActivatedRoute,
    private loadingController: LoadingController,
     private toastController: ToastController, private api: DbService) { }

  ngOnInit() {
    this.Limpiar();

    if (window.localStorage.getItem('id') != null) {
      this.principal(localStorage.getItem('id'));
      console.log("js ssss")
    } else {
      console.log('js erorororoorro');
    }




    }








 




async validarCredencial(){
  let that = this;
  this.loadingController.create({
    message: 'Almacenando Persona',
    spinner: 'lines-sharp'
  }).then(async res => {
    res.present();

    let usser = new Usuario;
    console.log(usser);
    usser.usuario =  this.correo;
    usser.password = this.contrasena;


    let data = await that.api.ValidarCredencial(this.correo).toPromise().then( (response) => {var respuesta = response; return respuesta;});
      console.log(data);
      console.log(data);
      if (data == true) {
      that.mostrarMensaje('Bienvenido')
      window.localStorage.setItem("id", this.correo);
      this.principal(this.correo)
      that.Limpiar();
     } else {
      that.mostrarMensaje('Usuario o contraseña invalidos');
      that.Limpiar();
     }

    res.dismiss();
  })

}





principal(correo){
  this.router.navigate(["/principal/", correo]);
}

cambiarContra(){
  this.navCtrl.navigateForward('change');
}



login(){
  this.navCtrl.navigateForward('login');
}






async mostrarMensaje(mensaje) {
  const toast = await this.toastController.create({
    message: mensaje,
    duration: 3000,
    position: 'bottom'
  });

  await toast.present();
}



Limpiar() {
  this.correo = '';
  this.contrasena = '';
}




 }


