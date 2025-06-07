import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-device',
  imports: [CommonModule],
  templateUrl: './device.html',
  styleUrl: './device.scss'
})
export class Device implements OnInit{
    deviceName: string = '';
    deviceIcon: string = '';
    deviceState: boolean = false;
    deviceColor: string = '';
    constructor() {
    }

    ngOnInit() {
      this.deviceName = "Living Room lights";
      this.deviceIcon = "/assets/lighton.png";
      this.deviceState = false;
      this.deviceColor = "#ffdc6c";
  }
}
