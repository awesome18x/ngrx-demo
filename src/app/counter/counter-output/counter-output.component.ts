import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { CounterState } from '../state/counter.state';
import { Subscription, Observable } from 'rxjs';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.scss']
})
export class CounterOutputComponent implements OnInit {
  // @Input() counter: number;
  // counter: number;
  counterSub: Subscription;
  counter$: Observable<{counter: number}>;
  constructor(private store: Store<{counter: CounterState}>) { }

  ngOnInit(): void {
    // this.counterSub = this.store.select('counter').subscribe((data) => {
    //   this.counter = data.counter;
    // });

    this.counter$ = this.store.select('counter');
  }

  ngOnDestroy(): void {
    if (this.counterSub) {
      this.counterSub.unsubscribe();
    }
  }

}
