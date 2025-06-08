import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-table',
  imports: [CommonModule],
  templateUrl: './table.html',
  styleUrl: './table.scss'
})
export class Table {
  devices = [
  {
    id: 1,
    name: 'Zinzu Chan Lee',
    port: 'Seoul',
    status: 'On',
    image: '/assets/lighton.png'
  },
  {
    id: 2,
    name: 'Jeet Saru',
    port: 'Kathmandu',
    status: 'Off',
    image: '/assets/lighton.png'
  }
];
}
