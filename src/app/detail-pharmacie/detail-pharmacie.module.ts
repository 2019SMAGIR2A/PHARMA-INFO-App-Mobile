import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailPharmaciePageRoutingModule } from './detail-pharmacie-routing.module';

import { DetailPharmaciePage } from './detail-pharmacie.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailPharmaciePageRoutingModule
  ],
  declarations: [DetailPharmaciePage]
})
export class DetailPharmaciePageModule {}
