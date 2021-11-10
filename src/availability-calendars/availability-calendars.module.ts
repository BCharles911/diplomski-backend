import { Module } from '@nestjs/common';
import { AvailabilityCalendarsService } from './availability-calendars.service';
import { AvailabilityCalendarsController } from './availability-calendars.controller';
import { AvailabilityCalendar } from './entities/availability-calendar.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([AvailabilityCalendar])],
  controllers: [AvailabilityCalendarsController],
  providers: [AvailabilityCalendarsService]
})
export class AvailabilityCalendarsModule {}
