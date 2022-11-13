import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingController, NavController, ToastController } from '@ionic/angular';
import { Producto } from 'src/app/app.component';
import { DbService } from 'src/app/services/db.service';
import * as internal from 'stream';
import { Producto2 } from 'src/app/app.component';



@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
})





export class PrincipalPage implements OnInit {

  Producto = new Producto;
  key = [];
  lista_personas = [];
  id;
  campo1;
  campo2;
  campo3; 
  permiso;
  correo: string;
  numero: Number;


  constructor(private router:Router, private navCtrl: NavController, private route:ActivatedRoute,
    private loadingController: LoadingController,
     private toastController: ToastController, private api: DbService) { }

  ngOnInit() {
    this.permiso = "3";
    //this.campo1 = "ddddd"
   
    this.correo = this.route.snapshot.paramMap.get("id");
    console.log(this.route.snapshot.paramMap.get("id"));
    this.Listar2();
  }




async Listar(correo) {

  let that = this;
  this.loadingController.create({
    message: 'Obteniendo información...',
    spinner: 'lines-sharp'
  }).then(async res => {
    res.present();
    console.log("listar");

    let data = await that.api.Listar().toPromise().then( (res) => {var respuesta = res; return respuesta;} );
    console.log(data);
    console.log(data[0].CodigoPostal);
    let user = new Producto;
    user = data[0];
    that.lista_personas.push(data[0]);
    Object.keys(user).map((key) => console.log(key))
    console.log(user);
    console.log(that.lista_personas);
    res.dismiss();
  })

}


async Listar2() {
  let that = this;
  this.loadingController.create({
    message: 'Obteniendo información...',
    spinner: 'lines-sharp'
  }).then(async res => {
    res.present();
    let data = await that.api.Listar3().toPromise().then( (res) => {var respuesta = res ; return respuesta;} );
    let key = Object.values(data).map((key) => this.id = [{productoId: key["productoId"],
                                                           Nombre: key["Nombre"],
                                                           Precio: key["precio"], 
                                                           Codigo: key["codigo"]}] );
    this.id = key;
    res.dismiss();
  })

}





cerrarSesion(){
  localStorage.removeItem('id'); 
  this.navCtrl.navigateForward('inicio');
}





cambiarContra(){
  this.navCtrl.navigateForward('change');
}




comparar(id,precio){

  if(this.campo1 == null && this.campo2 == null){

    this.campo1 = precio;

  }else if(this.campo1 !== null && this.campo2 == null){

    this.campo2 = precio;
    this.campo3 = this.campo2 - this.campo1;

  }else{
    alert("Limpie la consulta");
  }
}


opciones(id){
  this.permiso = id;

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
