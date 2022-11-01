import { AnimeService } from './../../shared/services/anime.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.scss']
})
export class DetailPageComponent implements OnInit {

  @Input() anime: any;

  constructor(private animeService: AnimeService) { }

  ngOnInit(): void {
    this.anime = this.animeService.anime;
    this.animeService.anime = '';
  }

}
