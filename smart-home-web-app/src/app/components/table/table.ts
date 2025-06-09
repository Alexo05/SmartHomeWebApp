import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { DeviceModule } from '../device/device.module';
import { DeviceService } from '../../services/device';
import { MessageService } from 'primeng/api';
import { Toast } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-table',
  imports: [CommonModule, Toast, ButtonModule],
  providers: [MessageService],
  templateUrl: './table.html',
  styleUrl: './table.scss'
})
export class Table {
  constructor(private deviceService: DeviceService, private messageService: MessageService) {
   }
   deleteDevice(id?: string) {
    this.deviceService.deleteDevice(id!).subscribe({
      next: () => {
        console.log(`Device with ID ${id} deleted successfully`);
        this.devices = this.devices.filter(device => device.id !== id);
      },
      error: (err) => {
        console.error('Error deleting device:', err);
      }
    });
    this.showSuccess();
   }
   showSuccess() {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Device deleted' });
    }
  @Input() devices!: DeviceModule[];
}
