import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DeviceModule } from '../components/device/device.module';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {
   private apiUrl = 'https://localhost:7104/api/devices'; // Change this to your actual API base URL

  constructor(private http: HttpClient) {}

  getDevices(): Observable<DeviceModule[]> {
    return this.http.get<DeviceModule[]>(this.apiUrl);
  }

  getDevice(id: string): Observable<DeviceModule> {
    return this.http.get<DeviceModule>(`${this.apiUrl}/${id}`);
  }

  createDevice(device: DeviceModule): Observable<DeviceModule> {
    return this.http.post<DeviceModule>(this.apiUrl, device);
  }

  updateDevice(id: string, device: DeviceModule): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${id}`, device);
  }

  deleteDevice(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
