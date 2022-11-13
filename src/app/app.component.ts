import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})

export class AppComponent {
  constructor() {}
}


export class Usuario{
  usuario!:string;
  password!:string;
}


export class Producto{
  codigo!:string;
  Nombre!:string;
  Direccion!:string;
  CodigoPostal!:string;
  Telefono!:string;
  Genero!:string;
  FechaNacimiento!:string;
  Precio!:string;
}

export interface Producto2{
  ProductoId:string,
  codigo?:string,
  Nombre:string,
  Direccion:string,
  CodigoPostal:string,
  Telefono:string,
  Genero:string,
  FechaNacimiento:string,
  Precio:string;
}