import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  getCategories(){
    return this.http.get('https://kitsu.io/api/edge/categories?page%5Blimit%5D=40&sort=-total_media_count');
  }
}
