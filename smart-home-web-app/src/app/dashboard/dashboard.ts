import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Device } from '../components/device/device';
import { DeviceModule } from '../components/device/device.module';
import { DeviceService } from '../services/device';
import { ChangeDetectorRef } from '@angular/core';
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-dashboard',
  standalone: true,   
  imports: [CommonModule, Device, NgxSpinnerModule ],
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
  constructor(private deviceService: DeviceService, private cdr: ChangeDetectorRef, private spinner: NgxSpinnerService) {
   }

  ngOnInit() {
      this.spinner.show();
      this.deviceService.getDevices().subscribe(data => {
        this.devices = data;
        this.loading = false;
        this.nbDevices = this.devices.length; 
        this.cdr.detectChanges();
        this.spinner.hide();
      });
      const userStr = sessionStorage.getItem('user');
      const user = userStr ? JSON.parse(userStr) : {};
      this.username = user.username || '';
      this.temp = 20;
      this.hum = 13;
  }
}
