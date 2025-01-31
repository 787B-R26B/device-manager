import { Injectable } from '@nestjs/common';
import { Device } from './device.model';
import { DeviceStatus } from './device-status.enum';

@Injectable()
export class DevicesService {
  private devices: Device[] = [];

  findAll() {
    return this.devices;
  }

  findById(id: string): Device {
    const device = this.devices.find((device) => device.id === id);
    if (!device) {
      throw new Error(`Device With ID ${id} not found.`);
    }
    return device;
  }

  create(device: Device) {
    this.devices.push(device);
    return device;
  }

  updateStatus(id: string): Device {
    const device = this.findById(id);
    if (device.status === DeviceStatus.LENT_OUT) {
      device.status = DeviceStatus.RENTABLE;
    } else if (device.status === DeviceStatus.RENTABLE) {
      device.status = DeviceStatus.LENT_OUT;
    }
    return device;
  }

  delete(id: string): void {
    const initialLength = this.devices.length;
    this.devices = this.devices.filter((device) => device.id !== id);
    if (this.devices.length === initialLength) {
      throw new Error(`Device with ID ${id} not found.`);
    }
  }
}
