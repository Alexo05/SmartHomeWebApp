import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Sidebar } from './components/sidebar/sidebar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  template: ``,
  styleUrl: './app.scss'
})
export class App {
  protected title = 'smart-home-web-app';
}
