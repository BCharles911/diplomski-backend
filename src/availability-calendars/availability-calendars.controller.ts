import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AvailabilityCalendarsService } from './availability-calendars.service';
import { CreateAvailabilityCalendarDto } from './dto/create-availability-calendar.dto';
import { UpdateAvailabilityCalendarDto } from './dto/update-availability-calendar.dto';

@Controller('availability-calendars')
export class AvailabilityCalendarsController {
  constructor(private readonly availabilityCalendarsService: AvailabilityCalendarsService) {}

  @Post()
  create(@Body() createAvailabilityCalendarDto: CreateAvailabilityCalendarDto) {
    return this.availabilityCalendarsService.create(createAvailabilityCalendarDto);
  }

  @Get()
  findAll() {
    return this.availabilityCalendarsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.availabilityCalendarsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAvailabilityCalendarDto: UpdateAvailabilityCalendarDto) {
    return this.availabilityCalendarsService.update(+id, updateAvailabilityCalendarDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.availabilityCalendarsService.remove(+id);
  }
}
