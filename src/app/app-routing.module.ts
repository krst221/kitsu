import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', loadChildren: () =>
    import('./pages/explore-page/explore-page.module').then(m => m.ExplorePageModule)
  },
  {
    path: 'anime/:name', loadChildren: () =>
    import('./pages/detail-page/detail-page.module').then(m => m.DetailPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
