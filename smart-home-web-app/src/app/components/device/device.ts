import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { DeviceModule } from './device.module';
import { DeviceService } from '../../services/device';

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
    constructor(private deviceService: DeviceService) {
    }

    ngOnInit() {
      this.deviceName = this.device.name;
      this.deviceIcon = this.device.imageUrl;
      this.deviceState = this.device.state;
      this.deviceColor = this.device.color;
  }
  
  updateDevice(){
    this.device.state = !this.device.state;
    this.deviceService.updateDevice(this.device.id!, this.device).subscribe({
      next: () => {
        console.log(`Device updated successfully`);
      },
      error: (err) => {
        console.error('Error deleting device:', err);
      }
    });
  }
}
