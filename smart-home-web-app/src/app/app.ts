import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.html',
  template: ``,
  styleUrl: './app.scss'
})
export class App {
  protected title = 'smart-home-web-app';
}
