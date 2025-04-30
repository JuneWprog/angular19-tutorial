import { Component, computed, effect, signal, WritableSignal } from '@angular/core';
//signal vs variable: signal is a function that creates a signal, when value changes, it will trigger the change detection.
@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  //signal vs variable vs computed signal
  //signal
  counter:WritableSignal <number> = signal(0); 
  //variable
  currentValue: number = 0;
  //computed signal - read only 
  //computed signal is a function that creates a signal, we can not set it directly, it will be updated automatically when the value of the signal changes.

  result = computed(() => this.counter() * 2); //computed signal, it will be updated automatically when the value of the signal changes.
  displayHeading: boolean = true; //boolean variable to show or hide the heading

  constructor() {
    //effect is a function that runs automatically whenever the signals inside it change.
    effect( () => {
      console.log (this.counter()); // when counter changes, it will trigger the change detection.
      if (this.counter() % 5 == 0) {
        this.displayHeading = false; //hide the heading when counter is greater than 5
      }
      else {
        this.displayHeading = true; //show the heading when counter is less than or equal to 5
      }

    })
  }
   //signal is a function that creates a signal,with value 0. 
   //use set() to update the value of the signal. 
   // use update() to update the value of the signal based on the previous value.

  increment() {
    // this.counter.update((prev) => prev + 1); 
    this.counter.set(this.counter() + 1); // set the value of the signal to counter + 1
   
    
  }
  decrement() {
    this.counter.update((prev) => prev - 1); 
  }

}
