import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Device } from '../components/device/device';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, Device],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss'
})
export class Dashboard {
  username: string = '';
  nbDevices: Number = 0;
  temp: Number = 0;
  hum: Number = 0;
  constructor() {
   }

  ngOnInit() {
    this.username = "Alexo";
    this.nbDevices = 2;
    this.temp = 20;
    this.hum = 13;
  }
}
