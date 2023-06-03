import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subject, debounceTime } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: [],
})
export class SearchBoxComponent implements OnInit {
  private debouncer: Subject<string> = new Subject<string>();
  @Input() public placeholder: string = '';
  @Output() public onValue: EventEmitter<string> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {
    this.debouncer.pipe(debounceTime(500)).subscribe((value) => {
      this.emitValue(value);
    });
  }

  emitValue(value: string) {
    this.onValue.emit(value);
  }

  onKeyPress(searchTerm: string) {
    this.debouncer.next(searchTerm);
  }
}
