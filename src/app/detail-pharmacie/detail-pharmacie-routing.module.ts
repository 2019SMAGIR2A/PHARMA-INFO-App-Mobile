import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailPharmaciePage } from './detail-pharmacie.page';

const routes: Routes = [
  {
    path: '',
    component: DetailPharmaciePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailPharmaciePageRoutingModule {}
