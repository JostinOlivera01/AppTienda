import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
import { DbService } from 'src/app/services/db.service';

@Component({
  selector: 'app-change',
  templateUrl: './change.page.html',
  styleUrls: ['./change.page.scss'],
})
export class ChangePage implements OnInit {

  nvCorreo: string = localStorage.getItem('id');
  nvContrasena: string = '';
  nvConfirma: string = '';


  constructor(private router:Router, private api: DbService,  
    private loadingController: LoadingController,
    private toastController: ToastController) { }

  ngOnInit() {
  }


 async validarCambio(){
    let that = this;
    this.loadingController.create({
      message: 'Almacenando Persona',
      spinner: 'lines-sharp'
    }).then(async (res) => {
    res.present();  
      console.log(this.nvCorreo);
      console.log(this.nvConfirma);
      console.log(this.nvContrasena);
    let data = await this.api.ActualizarContra(this.nvCorreo,this.nvContrasena,this.nvConfirma);
      console.log('js validarcambio paso')
      console.log(data);

      console.log('js -------')
        if (data['result'][0].RESPUESTA == 'OK') {
          that.mostrarMensaje('Persona Almacenada Correctamente');
          this.router.navigate(["/principal/", localStorage.getItem('id')]);
        } else {

          console.log(data['result'][0].RESPUESTA);
          that.mostrarMensaje('Persona no almacenada');
        }
  
        res.dismiss();


     })
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

