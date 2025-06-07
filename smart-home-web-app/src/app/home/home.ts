import { Component } from '@angular/core';
import { Sidebar } from '../components/sidebar/sidebar';
import { Dashboard } from '../dashboard/dashboard';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterOutlet, Sidebar],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {

}
