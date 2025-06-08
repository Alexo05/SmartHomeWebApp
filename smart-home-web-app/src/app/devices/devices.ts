import { Component } from '@angular/core';
import { Table } from '../components/table/table';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-devices',
  imports: [CommonModule, Table],
  templateUrl: './devices.html',
  styleUrl: './devices.scss'
})
export class Devices {

  deviceTypes = [
  {
    id: 1,
    name: 'Air Conditioner',
    imageUrl: 'assets/images/air-conditioner.png',
    imageUrl1: 'assets/images/air-conditioner.png',
    color : "#ff7c7c",
  },
  {
    id: 2,
    name: 'Smart Lighting',
    imageUrl: 'assets/images/lightoff.png',
    imageUrl1: 'assets/images/lighton.png',
    color: "#ffdc6c",
  },
   {
    id: 3,
    name: 'RGB Lighting',
    imageUrl: 'assets/images/rgblight.png',
    imageUrl1: 'assets/images/rgblight.png',
    color: "#a16cff",
  }
];

}
