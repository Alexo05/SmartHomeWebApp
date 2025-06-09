import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Table } from '../components/table/table';
import { CommonModule } from '@angular/common';
import { DeviceService } from '../services/device';
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';
import { DeviceModule } from '../components/device/device.module';
import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-devices',
  imports: [CommonModule, Table, NgxSpinnerModule, FormsModule ],
  templateUrl: './devices.html',
  styleUrl: './devices.scss'
})
export class Devices implements OnInit {
  constructor(private deviceService: DeviceService, private cdr: ChangeDetectorRef, private spinner: NgxSpinnerService) {
   }
  loading: boolean = true;
  devices: DeviceModule[] = [];
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
  onSubmit(form: NgForm) {
    console.log('Form Values:', form.value);
  }

  ngOnInit() {
      this.spinner.show();
      this.deviceService.getDevices().subscribe(data => {
        this.devices = data;
        this.loading = false;
        this.cdr.detectChanges();
        this.spinner.hide();
      });
  }

}
