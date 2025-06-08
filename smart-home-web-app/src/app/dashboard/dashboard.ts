import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Device } from '../components/device/device';
import { DeviceModule } from '../components/device/device.module';
import { DeviceService } from '../services/device';

@Component({
  selector: 'app-dashboard',
  standalone: true,   
  imports: [CommonModule, Device],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss'
})
export class Dashboard implements OnInit {
  loading: boolean = true;
  devices: DeviceModule[] = [];
  username: string = '';
  nbDevices: Number = 0;
  temp: Number = 0;
  hum: Number = 0;
  device: DeviceModule = {
    typeId: 1,
    name: 'Living Room lights',
    port: 12,
    imageUrl: '/assets/lighton.png',
    imageUrl1: '/assets/lighton.png',
    state: false,
    color: '#ffdc6c'
  }
  constructor(private deviceService: DeviceService) {
   }

  ngOnInit() {
      this.deviceService.getDevices().subscribe(data => {
        this.devices = data;
        this.loading = false;
        this.nbDevices = this.devices.length;  // update here when data arrives
        console.log(this.loading);
      });
      this.loading = false;
      this.username = "Alexo";
      this.temp = 20;
      this.hum = 13;
  }
}
