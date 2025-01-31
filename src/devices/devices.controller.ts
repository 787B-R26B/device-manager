import {
  Body,
  Controller,
  Get,
  Post,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';
import { DeviceStatus } from './device-status.enum';
import { Device } from './device.model';
import { DevicesService } from './devices.service';

@Controller('devices')
export class DevicesController {
  constructor(private readonly devicesService: DevicesService) {}

  @Get()
  findAll() {
    return this.devicesService.findAll();
  }

  @Get(':id')
  findById(@Param('id') id: string): Device {
    return this.devicesService.findById(id);
  }

  @Post()
  create(@Body('id') id: string, @Body('name') name: string): Device {
    const device: Device = {
      id,
      name,
      status: DeviceStatus.RENTABLE,
    };

    return this.devicesService.create(device);
  }
  @Patch(':id')
  updateStatus(@Param('id') id: string): Device {
    return this.devicesService.updateStatus(id);
  }
  @Delete(':id')
  delete(@Param('id') id: string): void {
    this.devicesService.delete(id);
  }
}
