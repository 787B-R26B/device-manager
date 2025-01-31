import { DeviceStatus } from './device-status.enum';

export interface Device {
  id: string;
  name: string;
  status: DeviceStatus;
}
