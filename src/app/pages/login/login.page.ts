import { Component, OnInit } from '@angular/core';
import { LoadingController, NavController, ToastController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { DbService } from 'src/app/services/db.service';
import { Usuario } from 'src/app/app.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  modeloUsuario: string = '';
  modeloCorreo: string = '';
  modeloApellido: string = '';
  modeloContrasena: string = '';
  numm: string = '0';
  

  Usuario: string = 'ADMIN';
  Apellido: string = 'prueba';
  Correo: string = 'correo@duoc.cl';
  Contrasena: string = 'ADMIN';

  nvContrasenau: string;




  constructor(private router:Router, private navCtrl: NavController, private route:ActivatedRoute,
             private loadingController: LoadingController,
              private toastController: ToastController, private api: DbService) {
                
               }

  ngOnInit() {








    //comprueba si la contraseña fue cambiada 
    this.nvContrasenau = this.route.snapshot.paramMap.get("id");
    console.log("salida");
    console.log(this.nvContrasenau);
    if(this.nvContrasenau == null || this.nvContrasenau === ""){
      this.Contrasena = this.Contrasena;

    } else {

      this.Contrasena = this.nvContrasenau;
    }
      
    
  }


  validarCredenciales(){
    if(this.modeloUsuario == this.Usuario && this.modeloContrasena == this.Contrasena){

        alert("Iniciando sesion");
        this.router.navigate(['principal'])


    }else
        alert("Contrasena Incorrecta");

    }





    async almacenar() {
      let that = this;
      this.loadingController.create({
        message: 'Almacenando Persona',
        spinner: 'lines-sharp'
      }).then(async res => {
        res.present();
        let usser = new Usuario;
        console.log(usser);
        usser.usuario =  this.modeloCorreo;
        usser.password = this.modeloContrasena;
        console.log(usser);
        //if(usser.usuario == "" && usser.password == ""){
  
       // }else{
        let data = await that.api.PersonaAlmacenar(usser);
        console.log(data);
        if (data) {
          that.mostrarMensaje('Persona Almacenada Correctamente');
          this.router.navigate(['inicio'])


        } else {
          that.mostrarMensaje('Persona no almacenada');
        }
        //}

  
        res.dismiss();
      }
      )
      
    }
















    async mostrarMensaje(mensaje) {
      const toast = await this.toastController.create({
        message: mensaje,
        duration: 3000,
        position: 'bottom'
      });
  
      await toast.present();
    }




  
}