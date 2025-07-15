import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { Footer } from "./components/footer/footer";

@Component({
  selector: 'app-root',
  imports: [Header, Footer, RouterOutlet],
  template: `
    <app-header></app-header>
    <main>
      <router-outlet></router-outlet>
    </main>
    <app-footer> </app-footer>
  `,
  styles: [`
        main{
          padding: 16px;
        }
    `],
})
export class App {
}
