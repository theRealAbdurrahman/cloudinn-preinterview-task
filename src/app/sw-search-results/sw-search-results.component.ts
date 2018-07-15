import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sw-search-results',
  templateUrl: './sw-search-results.component.html',
  styleUrls: ['./sw-search-results.component.css']
})
export class SwSearchResultsComponent implements OnInit {
  @Input() result: any;

  constructor() { }

  ngOnInit() {

  }

}
