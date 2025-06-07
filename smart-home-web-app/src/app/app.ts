import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from './home/home';

@Component({
  selector: 'app-root',
  imports: [Home],
  templateUrl: './app.html',
  template: ``,
  styleUrl: './app.scss'
})
export class App {
  protected title = 'smart-home-web-app';
}
