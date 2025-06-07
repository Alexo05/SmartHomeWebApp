import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { DeviceModule } from './deviice.module';

@Component({
  selector: 'app-device',
  imports: [CommonModule],
  templateUrl: './device.html',
  styleUrl: './device.scss'
})
export class Device implements OnInit{
    @Input() device!: DeviceModule;
    deviceName: string = '';
    deviceIcon: string = '';
    deviceState: boolean = false;
    deviceColor: string = '';
    constructor() {
    }

    ngOnInit() {
      this.deviceName = this.device.name;
      this.deviceIcon = this.device.icon;
      this.deviceState = this.device.state;
      this.deviceColor = this.device.color;
  }
}
