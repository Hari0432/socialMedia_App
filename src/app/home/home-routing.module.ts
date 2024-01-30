import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'new-page',
    loadChildren: () => import('./new-page/new-page.module').then( m => m.NewPagePageModule)
  },
  {
    path: 'next-page',
    loadChildren: () => import('./next-page/next-page.module').then( m => m.NextPagePageModule)
  },
  {
    path: 'open-page',
    loadChildren: () => import('./open-page/open-page.module').then( m => m.OpenPagePageModule)
  },
  {
    path: 'open-view',
    loadChildren: () => import('./open-view/open-view.module').then( m => m.OpenViewPageModule)
  },
  {
    path: 'open-image',
    loadChildren: () => import('./open-image/open-image.module').then( m => m.OpenImagePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
