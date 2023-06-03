import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { Subject, Subscription, debounceTime } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: [],
})
export class SearchBoxComponent implements OnInit, OnDestroy {
  private debouncer: Subject<string> = new Subject<string>();
  private debouncerSubscription?: Subscription;
  @Input() public placeholder: string = '';
  @Output() public onValue: EventEmitter<string> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {
    this.debouncerSubscription = this.debouncer
      .pipe(debounceTime(500))
      .subscribe((value) => {
        this.emitValue(value);
      });
  }

  ngOnDestroy(): void {
    this.debouncerSubscription?.unsubscribe();
  }

  emitValue(value: string) {
    this.onValue.emit(value);
  }

  onKeyPress(searchTerm: string) {
    this.debouncer.next(searchTerm);
  }
}
