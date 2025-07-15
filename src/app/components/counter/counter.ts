import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.html',
  styleUrl: './counter.scss'
})
export class Counter {
counter_value = signal(0);
key = signal("");

increment() {
  this.counter_value.update(value => value + 1);
}
decrement() {
  this.counter_value.update(value => value - 1);
}
reset() {
  this.counter_value.update((value) => value-value);
}

handleKeyPressed(event: KeyboardEvent) {
  this.key.set(event.key);
  console.log("Key Pressed: ", event.key);
}
}
