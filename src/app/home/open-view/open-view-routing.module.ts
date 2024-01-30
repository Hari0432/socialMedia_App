import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OpenViewPage } from './open-view.page';

const routes: Routes = [
  {
    path: '',
    component: OpenViewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OpenViewPageRoutingModule {}
