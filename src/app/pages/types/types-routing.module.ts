import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TypesPage } from './types.page';

const routes: Routes = [
  {
    path: '',
    component: TypesPage,
  },
  {
    path: ':id',
    loadChildren: () =>
      import('./type-detail/type-detail.module').then(
        (m) => m.TypeDetailPageModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TypesPageRoutingModule {}
