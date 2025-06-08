import { Component } from '@angular/core';
import { Sidebar } from '../components/sidebar/sidebar';
import { Dashboard } from '../dashboard/dashboard';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-home',
  imports: [RouterOutlet, Sidebar, HttpClientModule],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {

}
