import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from './home/home';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  imports: [Home, HttpClientModule],
  templateUrl: './app.html',
  template: ``,
  styleUrl: './app.scss'
})
export class App {
  protected title = 'smart-home-web-app';
}
