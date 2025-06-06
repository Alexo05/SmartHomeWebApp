
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sidebar',
  imports: [RouterModule, CommonModule],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss'
})

export class Sidebar implements OnInit {
  currentPath: string = '';
  constructor(private router: Router) {
    this.currentPath = this.router.url;
   }

  ngOnInit() {
    
  }
}
