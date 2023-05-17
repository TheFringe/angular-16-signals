import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  cars = ['Saab', 'Volvo', 'Tesla'];
  carsSignal = signal(['Saab', 'Volvo', 'Tesla']);

  counter = 1;
  counterSignal = signal(this.counter);

  constructor() { }

  add(car: string): void {
    this.cars.push(car);
    this.carsSignal.mutate((c) => c.push(car));
  }

  increase(): void {
    this.counter++;
    this.counterSignal.set(this.counter);
    console.log(this.counterSignal());
  }
}
