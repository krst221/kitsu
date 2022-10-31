import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', loadChildren: () =>
    import('./pages/home-page/home-page.module').then(m => m.HomePageModule)
  },
  {
    path: 'explore', loadChildren: () =>
    import('./pages/explore-page/explore-page.module').then(m => m.ExplorePageModule)
  },
  {
    path: 'anime', loadChildren: () =>
    import('./pages/anime-page/anime-page.module').then(m => m.AnimePageModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
