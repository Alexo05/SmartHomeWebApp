import { Component } from '@angular/core';
import { Home } from './home/home';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [Home, FormsModule],
  templateUrl: './app.html',
  template: ``,
  styleUrl: './app.scss'
})
export class App {
  protected title = 'smart-home-web-app';
}
