import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'list-pharmacies',
    loadChildren: () => import('./list-pharmacies/list-pharmacies.module').then( m => m.ListPharmaciesPageModule)
  },
  {
    path: 'detail-pharmacie',
    loadChildren: () => import('./detail-pharmacie/detail-pharmacie.module').then( m => m.DetailPharmaciePageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
