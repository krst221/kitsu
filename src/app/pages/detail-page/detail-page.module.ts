import { AnimeDetailsComponent } from '../../shared/components/anime-details/anime-details.component';
import { DetailHeaderComponent } from './../../shared/components/detail-header/detail-header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryTransformPipe } from '../../shared/pipes/country.pipe';
import { DetailPageRoutingModule } from './detail-page-routing.module';
import { DetailPageComponent } from './detail-page.component';


@NgModule({
  declarations: [
    DetailPageComponent,
    DetailHeaderComponent,
    AnimeDetailsComponent,
    CountryTransformPipe,
  ],
  imports: [
    CommonModule,
    DetailPageRoutingModule
  ]
})
export class DetailPageModule { }
