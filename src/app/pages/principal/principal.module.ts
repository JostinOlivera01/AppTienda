import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrincipalPageRoutingModule } from './principal-routing.module';

import { PrincipalPage } from './principal.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { ObjToArrayPipe } from 'src/app/objToArray.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrincipalPageRoutingModule, 
    ComponentsModule
  ],
  declarations: [PrincipalPage, ObjToArrayPipe]
})
export class PrincipalPageModule {}
