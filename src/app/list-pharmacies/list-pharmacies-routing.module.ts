import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListPharmaciesPage } from './list-pharmacies.page';

const routes: Routes = [
  {
    path: '',
    component: ListPharmaciesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListPharmaciesPageRoutingModule {}
