import { Component } from '@angular/core';
import { Greetings } from '../components/greetings/greetings';
import{Counter} from "../components/counter/counter";

@Component({
  selector: 'app-home',
  imports: [Greetings, Counter],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
// amazonq-ignore-next-line
export class Home {

}
