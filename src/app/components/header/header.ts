import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
  private _title = "Angular App";

  get title(): string {
    return this._title;
  }
}