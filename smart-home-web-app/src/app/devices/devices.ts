import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Table } from '../components/table/table';
import { CommonModule } from '@angular/common';
import { DeviceService } from '../services/device';
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';
import { DeviceModule } from '../components/device/device.module';
import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { Toast } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-devices',
  imports: [CommonModule, Table, NgxSpinnerModule, FormsModule, Toast, ButtonModule ],
  providers: [MessageService],
  templateUrl: './devices.html',
  styleUrl: './devices.scss'
})
export class Devices implements OnInit {
  constructor(private deviceService: DeviceService, private cdr: ChangeDetectorRef, private spinner: NgxSpinnerService, private messageService: MessageService) {
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
    console.log(form.value);
    if(form.value.deviceName === "" || form.value.deviceType === "" || form.value.devicePort === ""){
      this.showError();
    }
    else{
      const newDevice: DeviceModule = {
        name: form.value.deviceName,
        typeId: form.value.deviceType,
        port: form.value.devicePort,
        imageUrl: this.deviceTypes[form.value.deviceType - 1].imageUrl,
        imageUrl1: this.deviceTypes[form.value.deviceType - 1].imageUrl,
        color: this.deviceTypes[form.value.deviceType - 1].color,
        state: false,
      };
      this.deviceService.createDevice(newDevice).subscribe({
      next: (res) =>{ 
        console.log('Device created:', res);
        this.devices.push(newDevice);
      },
      error: (err) => console.error('Error creating device:', err)
    });
    this.showSuccess();
    }
  }
  showSuccess() {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Device created' });
  }
  showError() {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Fill in all the fields first' });
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
