import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OpenPagePage } from './open-page.page';

const routes: Routes = [
  {
    path: '',
    component: OpenPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OpenPagePageRoutingModule {}
