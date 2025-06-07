import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Device } from '../components/device/device';
import { DeviceModule } from '../components/device/deviice.module';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, Device],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss'
})
export class Dashboard implements OnInit {
  username: string = '';
  nbDevices: Number = 0;
  temp: Number = 0;
  hum: Number = 0;
  device: DeviceModule = {
    name: 'Living Room lights',
    port: 12,
    icon: '/assets/lighton.png',
    state: false,
    color: '#ffdc6c'
  }
  constructor() {
   }

  ngOnInit() {
    this.username = "Alexo";
    this.nbDevices = 2;
    this.temp = 20;
    this.hum = 13;
  }
}
