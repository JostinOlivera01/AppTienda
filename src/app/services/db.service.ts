import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { promise } from 'protractor';
import { Producto2, Usuario } from '../app.component';
import { resolve } from 'dns';
import { Subscriber } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DbService {
  rutaBase: string ='http://localhost/rest/conexion/auth';
  rutaProducto: string = 'http://localhost/rest/pacientes'

  constructor(private route:ActivatedRoute,private router:Router,private http: HttpClient) {}


    PersonaAlmacenar(usuario:Usuario) {
    console.log(usuario);
    let that = this;
    console.log(usuario);

  let valor = new Promise( (resolve) => {
     resolve(that.http.post(that.rutaBase, usuario))
    })
    console.log(valor);
    console.log(valor);
    let estado = 'TODOBIEN'
    return estado;
  }


  ActualizarContra(correo, contraNueva, contraActual){
    let that = this;
    console.log('js aaaa')
    return new Promise((resolve) =>{
      resolve(that.http
        .patch(that.rutaBase,{
        nombreFuncion: "UsuarioModificarContrasena",
        parametros: [correo, contraNueva, contraActual]
      })
      .toPromise()
      );
    });
  }




  ValidarCredencial(correo){
    let that = this;
    let data =  that.http.get(that.rutaBase + '?usuario=' + correo);
    console.log(data);
    return data;
  }


  Listar(){
    let that = this;                
    let data = that.http.get(that.rutaProducto + '?id=8');
    let eso =  that.http.get(that.rutaProducto + '?id=8').subscribe(res => console.log(res));
    console.log(eso);
    console.log("Sss");
    return data;
    }

  Listar2(){
      let that = this;                
      let data = that.http.get(that.rutaProducto + '?page=1');
      let eso =  that.http.get(that.rutaProducto + '?page=1').subscribe(res => console.log(res));
      console.log(eso);
      console.log("Sss");
      return data;
      }

      
      Listar3(){
        let that = this;                
        let data = that.http.get(that.rutaProducto + '?page=1');
        let eso =  that.http.get(that.rutaProducto + '?page=1');
        console.log(data);
        console.log("Sss");
        return data;
        }












  //Proteger rutaa
  canActivate(){
  }


}
