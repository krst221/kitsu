import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-detail-header',
  templateUrl: './detail-header.component.html',
  styleUrls: ['./detail-header.component.scss']
})
export class DetailHeaderComponent implements OnInit {

  img: any = '';
  @Input() anime: any;

  constructor() { }

  ngOnInit(): void {
    if(this.anime.attributes.coverImage != null) this.img = this.anime.attributes.coverImage.original;
  }

}
