
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationEnd, RouterLink, RouterModule } from '@angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sidebar',
  imports: [RouterModule, RouterLink, CommonModule],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss'
})

export class Sidebar implements OnInit {
  currentPath: string = '';
  constructor(private router: Router) {
    this.currentPath = this.router.url;
   }

  ngOnInit() {
    this.currentPath = this.router.url;
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.currentPath = event.urlAfterRedirects;
      }
    });
  }
  logout(){
    sessionStorage.removeItem('user');
    this.router.navigate(['/login']);
  }
}
