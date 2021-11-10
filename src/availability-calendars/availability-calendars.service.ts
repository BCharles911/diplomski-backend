import { Injectable } from '@nestjs/common';
import { CreateAvailabilityCalendarDto } from './dto/create-availability-calendar.dto';
import { UpdateAvailabilityCalendarDto } from './dto/update-availability-calendar.dto';

@Injectable()
export class AvailabilityCalendarsService {
  create(createAvailabilityCalendarDto: CreateAvailabilityCalendarDto) {
    return 'This action adds a new availabilityCalendar';
  }

  findAll() {
    return `This action returns all availabilityCalendars`;
  }

  findOne(id: number) {
    return `This action returns a #${id} availabilityCalendar`;
  }

  update(id: number, updateAvailabilityCalendarDto: UpdateAvailabilityCalendarDto) {
    return `This action updates a #${id} availabilityCalendar`;
  }

  remove(id: number) {
    return `This action removes a #${id} availabilityCalendar`;
  }
}
