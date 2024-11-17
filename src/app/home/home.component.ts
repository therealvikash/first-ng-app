import { Component, input } from '@angular/core';
import { GreetingComponent } from '../components/greeting/greeting.component';
import { CounterComponent } from '../components/counter/counter.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [GreetingComponent, CounterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  homeMessage = input('Hello World 1234');
  keyUpHandler(event: KeyboardEvent) {
    console.log(`User pressed the ${event.key} key in the keyboard.`);
    
  }
}
