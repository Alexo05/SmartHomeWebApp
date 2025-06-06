import { Component } from '@angular/core';
import { Sidebar } from '../components/sidebar/sidebar';
import { Dashboard } from '../dashboard/dashboard';

@Component({
  selector: 'app-home',
  imports: [Sidebar, Dashboard],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {

}
