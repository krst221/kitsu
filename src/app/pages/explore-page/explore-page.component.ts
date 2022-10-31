import { CategoryService } from './../../shared/services/category.service';
import { AnimeService } from './../../shared/services/anime.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-explore-page',
  templateUrl: './explore-page.component.html',
  styleUrls: ['./explore-page.component.scss']
})
export class ExplorePageComponent implements OnInit {

  trend?: any[];
  broad?: any[];
  awaited?: any[];
  rated?: any[];
  popular?: any[];

  categories?: any[];

  constructor(private animeService: AnimeService, private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.animeService.getTrendingAnime().subscribe((res: any) => {this.trend = res.data;})
    this.animeService.getPopularBroadcastedAnime().subscribe((res: any) => {this.broad = res.data;})
    this.animeService.getAwaitedAnime().subscribe((res: any) => {this.awaited = res.data;})
    this.animeService.getRatedAnime().subscribe((res: any) => {this.rated = res.data;})
    this.animeService.getPopularAnime().subscribe((res: any) => {this.popular = res.data;})
    this.categoryService.getCategories().subscribe((res: any) => {this.categories = res.data;})
  }

}
