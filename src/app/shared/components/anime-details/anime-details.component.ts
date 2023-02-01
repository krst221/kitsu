import { CountryTransformPipe } from '../../pipes/country.pipe';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-anime-details',
  templateUrl: './anime-details.component.html',
  styleUrls: ['./anime-details.component.scss']
})
export class AnimeDetailsComponent implements OnInit {

  @Input() anime: any;

  season?: any;

  getSeason(month: any){
    if(month === 'March' || month === 'January' || month === 'February') this.season = 'Winter';
    else if(month === 'June' || month === 'April' || month === 'May') this.season = 'Spring';
    else if(month === 'September' || month === 'July' || month === 'August') this.season = 'Summer';
    else this.season = 'Fall';
    return this.season;
  }

  getStatus(status: string){
    if(status === 'current') return 'En emisión';
    else return 'Finalizado';
  }

  sortByText(titles: any){
    let array = [];
    for (let title of titles){
      title.key = this.countryTransform.transform(title.key);
      array.push([title.key, title.value]);
    }
    array.sort(function(a, b){
      return (a[0]).localeCompare(b[0]);
    })
    console.log(array);
    return array;
  }

  constructor(private countryTransform: CountryTransformPipe) { }

  ngOnInit(): void {
  }

}
