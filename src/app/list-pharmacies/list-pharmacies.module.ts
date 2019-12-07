import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListPharmaciesPageRoutingModule } from './list-pharmacies-routing.module';

import { ListPharmaciesPage } from './list-pharmacies.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListPharmaciesPageRoutingModule
  ],
  declarations: [ListPharmaciesPage]
})
export class ListPharmaciesPageModule {}
