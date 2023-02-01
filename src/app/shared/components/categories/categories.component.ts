import { Component, OnInit, Input } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  @Input() categories?: any[];

  ngOnInit(): void {
  }

  constructor() { }

}
