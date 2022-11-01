import { AnimeService } from './../../services/anime.service';
import { Component, OnInit, Input} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent implements OnInit {

  @Input() animes?: any[];
  @Input() img?: any;

  id?: number;

  isHover(id: number){
    this.id = id;
    return this.id;
  }

  getDetail(anime: any){
    this.animeService.anime = anime;
    this.router.navigate(['/anime/' + anime.attributes.slug]);
  }

  isNotHover(){
    this.id = 0;
    return this.id;
  }
  constructor(private animeService: AnimeService, private router: Router) { }

  ngOnInit(): void {
  }

}
