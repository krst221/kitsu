import { CategoriesComponent } from './../../shared/components/categories/categories.component';
import { GalleryComponent } from './../../shared/components/gallery/gallery.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExplorePageRoutingModule } from './explore-page-routing.module';
import { ExplorePageComponent } from './explore-page.component';


@NgModule({
  declarations: [
    ExplorePageComponent,
    GalleryComponent,
    CategoriesComponent
  ],
  imports: [
    CommonModule,
    ExplorePageRoutingModule
  ]
})
export class ExplorePageModule { }
