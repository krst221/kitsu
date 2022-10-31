import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnimeService {

  constructor(private http: HttpClient) { }

  getTrendingAnime() {
    return this.http.get('https://kitsu.io/api/edge/trending/anime?limit=5');
  }

  getPopularBroadcastedAnime() {
    return this.http.get('https://kitsu.io/api/edge/anime?filter%5Bstatus%5D=current&page%5Blimit%5D=5&sort=-user_count');
  }

  getAwaitedAnime() {
    return this.http.get('https://kitsu.io/api/edge/anime?filter%5Bstatus%5D=upcoming&page%5Blimit%5D=5&sort=-user_count');
  }

  getRatedAnime() {
    return this.http.get('https://kitsu.io/api/edge/anime?page%5Blimit%5D=5&sort=-average_rating');
  }

  getPopularAnime() {
    return this.http.get('https://kitsu.io/api/edge/anime?page%5Blimit%5D=5&sort=-user_count');
  }

}
