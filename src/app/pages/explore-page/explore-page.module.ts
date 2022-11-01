import { TranslatePipe } from './../../shared/pipes/translate.pipe';
import { CategoriesComponent } from './../../shared/components/categories/categories.component';
import { GalleryComponent } from './../../shared/components/gallery/gallery.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExplorePageRoutingModule } from './explore-page-routing.module';
import { ExplorePageComponent } from './explore-page.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    ExplorePageComponent,
    GalleryComponent,
    CategoriesComponent,
    TranslatePipe
  ],
  imports: [
    CommonModule,
    ExplorePageRoutingModule,
    NgbModule,
  ]
})
export class ExplorePageModule { }
