import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChangePageRoutingModule } from './change-routing.module';

import { ChangePage } from './change.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChangePageRoutingModule,
    ComponentsModule
  ],
  declarations: [ChangePage]
})
export class ChangePageModule {}
