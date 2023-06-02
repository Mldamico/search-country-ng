import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: [],
})
export class SearchBoxComponent implements OnInit {
  @Input() public placeholder: string = '';
  constructor() {}

  ngOnInit(): void {}
}