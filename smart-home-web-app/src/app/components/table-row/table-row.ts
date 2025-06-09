import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DeviceModule } from '../device/device.module';
import { Toast } from 'primeng/toast';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-table-row',
  imports: [CommonModule, Toast],
  templateUrl: './table-row.html',
  styleUrl: './table-row.scss'
})
export class TableRow implements  OnInit{
  @Input() device!: DeviceModule;

  @Output() delete = new EventEmitter<void>();

  handleDelete() {
    this.delete.emit(); 
  }
  deviceTypeId: number = 0;
   deviceName: string = '';
   devicePort: number = 0;
    deviceIcon: string = '';
    deviceState: boolean = false;
    deviceColor: string = '';
    constructor() {
    }

    ngOnInit() {
      this.deviceTypeId = this.device.typeId;
      this.deviceName = this.device.name;
      this.devicePort = this.device.port;
      this.deviceIcon = this.device.imageUrl;
      this.deviceState = this.device.state;
      this.deviceColor = this.device.color;
  }
}
